import styles from "../index.module.scss";
import { Text, NumberInput, Button } from '@mantine/core'
import { mint } from '../../../functions/mint'
import useWeb3 from '../../../hooks/useWeb3';
import { useEffect } from "react";
import checkPrice from "../../../functions/checkPrice"
import Web3 from 'web3'
import { useState } from '@hookstate/core'
import store from '../../../store/store'
import MintObjectProps from "../../../@types/mintObject";
declare const window: any;


const ModalInitialState = (props: any) => {
  const { account } = useWeb3()
  const { mintValue, mintObject, price, isSuccess, isLoading, isError } = useState(store)
  const web3 = new Web3(Web3.givenProvider);

  async function handleMint(account: any) {
    isLoading.set(true)
    await mint(mintValue.get(), account).then((mintObj: MintObjectProps) => {
    isLoading.set(true)
      if (mintObj == undefined) {
        isError.set(true)
        return;
      }
      if(mintObj.hash){
        isLoading.set(true)
      mintObject.set(mintObj)    
      }
      if(mintObj.receipt){
        isSuccess.set(true)
        isLoading.set(false)
      mintObject.merge(mintObj)    
      console.log(mintObj)
      }
      if(mintObj.error){
        console.log(mintObj.error)
        isLoading.set(false)
        isSuccess.set(false)
        isError.set(true)
      }
    })
  }

  const  preventMinus = (val: number) => {
    if(isNaN(val)){
      mintValue.set(0)
    }else {
      mintValue.set(val = val >= 0 ? val : 0)
    }
  }
  
useEffect(() => {
       checkPrice(window.ethereum?.selectedAddress).then(priceItem => {
        let priceConverted = Number(web3.utils.fromWei(String(priceItem), 'ether'))
        price.merge(priceConverted )
      })
  }, [price.get(), mintValue.get(), isLoading.get(), isSuccess.get()])

  return (
    <>
      <Text className={styles.bodyText}>We want a long lasting community where members enjoy benefits, surprises, in real life and metaversic
        events, and above all exclusivity. We want a long lasting community where members enjoy benefits,
        surprises, in real life and metaversic events, and above all exclusivity.</Text>
      <Text className={styles.biggerText}>HOW many <span>Bearded Buddies</span> you want?</Text>
      <NumberInput classNames={{ defaultVariant: styles.numberInput, control: styles.control }} onChange={(val) => preventMinus(val!)}   />
      <Text className={styles.belowInputTip} size="sm">For : {!mintValue ? 0 : price.get() * mintValue.get()} ETH</Text>
      <Button className={styles.mintButton} onClick={() => handleMint(window.ethereum?.selectedAddress)} disabled={mintValue.get() <=0 ? true: false}>Mint</Button>
    </>
  )
}

export default ModalInitialState;


