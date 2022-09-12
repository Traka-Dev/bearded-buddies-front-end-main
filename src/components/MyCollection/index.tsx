import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button, CloseButton, NumberInput, Space, Text, Title } from '@mantine/core';
import useWeb3 from '../../hooks/useWeb3';
import { useState } from '@hookstate/core'
import { getNfts } from "../../functions/getNFTs";
import { getNftsIPFs } from "../../functions/getNFTsIPFs";
import parseJSON from "../../functions/parseIPFSJson"
import store from '../../store/store'
import styles from "./index.module.scss"
import backgroundModal from '../../assets/images/modalAssets/Modal.svg'
import circles from '../../assets/images/modalAssets/circles.svg'
import coin from '../../assets/images/modalAssets/Coin.svg'
import ModalInitialState from "./ModalInitialState"
import ModalErrorState from './ModalErrorState';
import ModalLoadingState from './ModalLoadingState';
import nftListProps from "../../@types/nftListProps"
import ModalNoNftState from './ModalNoNftState';
declare var window: any;
const backgroundmodal = {
  backgroundImage: `url(${backgroundModal})`,
}
interface ModalProps {
  toggleCollection: () => void;
}
export default function MintModal({ toggleCollection }: ModalProps) {
  const [nftURLs, setNftURLs] = React.useState<String[]>([])
  const [nftImages, setNftImages] = React.useState<[]>()
  const [render, setRender] = React.useState(false)
  const { isShowingCollection, isLoadingNft, isError, nftIdList, noNfts } = useState(store)

  console.log('rendered')
  useEffect(() => {
    if (window.ethereum?.selectedAddress) {
      const res = handleNftURLList()

    }
    const listner = function (e: KeyboardEvent) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        isShowingCollection.get() && toggleCollection();
      }
    }
    window.addEventListener('keyup', listner)
    return (() => {
      window.removeEventListener('keyup', listner)
      isLoadingNft.set(false)
      nftIdList.set([])
      setNftURLs([])
      setNftImages([])
      noNfts.set(false)
    })
  }, [window.ethereum?.selectedAddress, render])
  async function handleNftURLList() {
    isLoadingNft.set(true)
    getNfts(window.ethereum?.selectedAddress).then((item: any) => {
      nftIdList.merge(item)
    }).then(() => {

      if (nftIdList.get().length > 0) {
        nftIdList.get().map((id, i) => {
          getNftsIPFs(id).then((item: any) => {
            setNftURLs(current => [...current, item])
          }).then(() => {
            parseJSON(nftURLs as any).then((res: any) => setNftImages(res)).then(() => setRender(true))
            isLoadingNft.set(false)
            noNfts.set(false)
          })
        })
      } if (nftIdList.get().length == 0) {
        isLoadingNft.set(false)
        noNfts.set(true)
      }
    })
  }

  return (
    isShowingCollection.get() ? ReactDOM.createPortal(
      <div className={styles.modalWrapper}>
        <div className={styles.modal} style={backgroundmodal}>
          <div className={styles.body}>
            <CloseButton className={styles.closeButton} onClick={toggleCollection} aria-label="Close modal" color="pink" size={32} />
            <img className={styles.circlesImage} src={circles} />
            <div className={styles.mainTitleWrapper}>
              <Title className={styles.titleOne} align="center" order={2}>My Bearded Buddies</Title>
              <div className={styles.lineTitleWrapper}>
                <div className={styles.circleOne}></div>
                <div className={styles.lineTitleOne}></div>
                <div className={styles.circleTwo}></div>
                <div className={styles.lineTitleTwo}></div>
                <div className={styles.circleThree}></div>
              </div>
            </div>
            <Space h="md" />
            <div className={styles.statesWrapper}>
              {!noNfts.get() ?
                <ModalInitialState nftImages={nftImages} nftIdList={nftIdList.get()} />
                : isLoadingNft.get() ?
                  <ModalLoadingState />
                  : isError.get() ?
                    <ModalErrorState /> : noNfts.get() ? <ModalNoNftState /> : <ModalNoNftState />
              }
            </div>
          </div>
        </div>
      </div>
      , document.body

    ) : null

  )
}

export const useCollectionModal = () => {
  const { isShowingCollection } = useState(store);

  function toggleCollection() {
    isShowingCollection.set(!isShowingCollection.get());
  }

  return {
    toggleCollection,
  }
}