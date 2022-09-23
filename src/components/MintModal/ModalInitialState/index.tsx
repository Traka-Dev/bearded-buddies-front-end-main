import styles from "../index.module.scss"
import { Text, NumberInput, Button } from "@mantine/core"
import { mint } from "../../../functions/mint"
import useWeb3 from "../../../hooks/useWeb3"
import { useEffect } from "react"
import checkPrice from "../../../functions/checkPrice"
import Web3 from "web3"
import { useState, useHookstate } from "@hookstate/core"
import store from "../../../store/store"
import MintObjectProps from "../../../@types/mintObject"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { connectAccount } from "../../../functions/connectAccount"

declare const window: any

const ModalInitialState = (props: any) => {
  const { account } = useWeb3()
  const {
    mintValue,
    mintObject,
    price,
    isSuccess,
    isLoading,
    isError,
    noWallet,
  } = useState(store)
  const total = useHookstate(".08")
  const web3 = new Web3(Web3.givenProvider)

  async function handleMint(account: any) {
    isLoading.set(true)
    await mint(mintValue.get(), account).then((mintObj: MintObjectProps) => {
      isLoading.set(true)
      if (mintObj == undefined) {
        isError.set(true)
        return
      }
      if (mintObj.hash) {
        isLoading.set(true)
        mintObject.set(mintObj)
      }
      if (mintObj.receipt) {
        isSuccess.set(true)
        isLoading.set(false)
        mintObject.merge(mintObj)
        console.log(mintObj)
      }
      if (mintObj.error) {
        console.log(mintObj.error)
        isLoading.set(false)
        isSuccess.set(false)
        isError.set(true)
      }
    })
  }

  const preventMinus = (val: number) => {
    if (isNaN(val)) {
      mintValue.set(1)
    } else {
      if (val >= 1) mintValue.set(val)
    }
  }

  useEffect(() => {
    checkPrice(window.ethereum?.selectedAddress).then(priceItem => {
      let priceNft
      if (priceItem) {
        priceNft = priceItem == 0 ? 80000000000000000 : priceItem
      } else {
        priceNft = 80000000000000000
      }
      console.log("precio ->", priceNft)
      let priceConverted = Number(web3.utils.fromWei(String(priceNft), "ether"))
      price.merge(priceConverted)
      total.set((mintValue.get() * priceConverted).toString())
    })
  }, [price.get(), mintValue.get(), isLoading.get(), isSuccess.get()])

  useEffect(() => {
    if (price.get() === 80000000000000000) {
      total.set(
        (
          mintValue.get() *
          Number(web3.utils.fromWei(String(price.get()), "ether"))
        ).toString()
      )
    } else {
      total.set((mintValue.get() * price.get()).toString())
    }
  }, [])

  const handleconnectAccount = () => {
    if (window?.ethereum) {
      connectAccount()
    } else {
      noWallet.set(true)
      isError.set(true)
    }
  }

  return (
    <>
      <Text className={styles.bodyText}>
        We want a long lasting community where members enjoy benefits,
        surprises, in real life and metaversic events, and above all
        exclusivity. We want a long lasting community where members enjoy
        benefits, surprises, in real life and metaversic events, and above all
        exclusivity.
      </Text>
      <Text className={styles.biggerText}>
        HOW many <span>Bearded Buddies</span> you want?
      </Text>
      <NumberInput
        classNames={{
          defaultVariant: styles.numberInput,
          control: styles.control,
        }}
        value={mintValue.get()}
        onChange={val => preventMinus(val!)}
        min={1}
      />
      <Text className={styles.belowInputTip} size="sm">
        For : {!mintValue ? 0 : price.get() * mintValue.get()} ETH
      </Text>
      <div style={{ display: "flex", alignItems: "center" }}>
        {account ? (
          <Button
            className={styles.mintButton}
            onClick={() => handleMint(window.ethereum?.selectedAddress)}
            disabled={mintValue.get() <= 0 ? true : false}
          >
            Mint with ETH
          </Button>
        ) : (
          <Button
            className={styles.mintButton}
            onClick={() => handleconnectAccount()}
            disabled={mintValue.get() <= 0 ? true : false}
          >
            Buy With Eth
          </Button>
        )}
        <CrossmintPayButton
          clientId="0deee656-9b7b-48b9-be0b-8cee9e2e5382"
          className="crossmintBtn-2"
          mintConfig={{
            type: "erc-721",
            totalPrice: total.get(),
            _numberOfBeardedBuddies: mintValue.get(),
          }}
        />
        <CrossmintPayButton
          clientId="0deee656-9b7b-48b9-be0b-8cee9e2e5382"
          className="crossmintBtn-2"
          paymentMethod="SOL"
          mintConfig={{
            totalPrice: total.get(),
            _numberOfBeardedBuddies: mintValue.get(),
            type: "erc-721",
          }}
        />
      </div>
    </>
  )
}

export default ModalInitialState
