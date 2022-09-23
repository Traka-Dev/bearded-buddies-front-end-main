import styles from "../index.module.scss"
import { Text } from "@mantine/core"
import { useState } from "@hookstate/core"
import store from "../../../store/store"
import errorIcon from "../../../assets/images/modalAssets/ErrorCircle.svg"

const ModalErrorState = () => {
  const { noWallet } = useState(store)

  if (noWallet) {
    return (
      <>
        <Text className={styles.biggerText} style={{ color: "white" }}>
          Wallet Not Found!
        </Text>
        <Text className={styles.mediumText} style={{ color: "white" }}>
          Please check your wallet is unlocked and enabled.
        </Text>
        <img src={errorIcon} />
      </>
    )
  } else {
    return (
      <>
        <Text className={styles.biggerText} style={{ color: "white" }}>
          There was an error with the transaction
        </Text>
        <Text className={styles.mediumText} style={{ color: "white" }}>
          Please check your metamask for more details
        </Text>
        <img src={errorIcon} />
      </>
    )
  }
}

export default ModalErrorState
