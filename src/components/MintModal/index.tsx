import React, { useEffect } from 'react';
import { Button, CloseButton, NumberInput, Space, Text, Title } from '@mantine/core';
import styles from "./index.module.scss"
import backgroundModal from '../../assets/images/modalAssets/Modal.svg'
import circles from '../../assets/images/modalAssets/circles.svg'
import coin from '../../assets/images/modalAssets/Coin.svg'
import ReactDOM from 'react-dom';
import ModalInitialState from "./ModalInitialState"
import ModalLoadingState from './ModalLoadingState';
import ModalSuccessfulState from './ModalSuccessfulState';
import useWeb3 from '../../hooks/useWeb3';
import { useState } from '@hookstate/core'
import store from '../../store/store'
import ModalErrorState from './ModalErrorState';
const backgroundmodal = {
  backgroundImage: `url(${backgroundModal})`,
}
interface ModalProps {
  toggle: () => void;
}
export default function MintModal({ toggle }: ModalProps) {
  const { account } = useWeb3()
  const { mintValue, mintObject, price, isSuccess, isLoading, isError, isShowingMint } = useState(store)
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowingMint.get() && toggle();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowingMint.get(), toggle])

  return (
    isShowingMint.get() ? ReactDOM.createPortal(
      <div className={styles.modalWrapper}>
        <div className={styles.modal} style={backgroundmodal}>
          <div className={styles.body}>
            <CloseButton className={styles.closeButton} onClick={toggle} aria-label="Close modal" color="pink" size={32} />
            <img className={styles.circlesImage} src={circles} />
            <div className={styles.coinWrapper}>
              <img src={coin} />
              <img src={coin} />
              <img src={coin} />
            </div>
            <div className={styles.mainTitleWrapper}>
              <Title className={styles.titleOne} align="center" order={2}>Get your Bearded Buddies</Title>
              <div className={styles.lineTitleWrapper}>
                <div className={styles.circleOne}></div>
                <div className={styles.lineTitleOne}></div>
                <div className={styles.circleTwo}></div>
                <div className={styles.lineTitleTwo}></div>
                <div className={styles.circleThree}></div>
              </div>
            </div>
            <div className={styles.mainTextWrapper}>
            <Space h="md" />
            { isLoading.get() == true?
            <ModalLoadingState />
            :isSuccess.get() == true ?
            <ModalSuccessfulState wallet_address={account} /> 
            : isError.get() == true ?
              <ModalErrorState />:  <ModalInitialState  />
          }
            </div>
          </div>
        </div>
      </div>
      , document.body

    ) : null

  )
}

export const useMintModal = () => {
  const { isShowingMint, isError, isSuccess } = useState(store);

  function toggle() {
    isShowingMint.set(!isShowingMint.get());
    isError.set(false)
    isSuccess.set(false)

  }

  return {
    toggle,
  }
}