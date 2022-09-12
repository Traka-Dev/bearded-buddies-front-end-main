import styles from "../index.module.scss";
import successStyle from "./index.module.scss";
import {Text} from '@mantine/core'
import checkIcon from "../../../assets/images/modalAssets/check_icon.svg"
import {useState} from '@hookstate/core'
import store from '../../../store/store'

const ModalSuccessfulState = ({wallet_address} : any) => {
  const {mintValue, mintObject} = useState(store)
    return (
      <>
      <div className={successStyle.container}>
      <Text className={styles.biggerText}>
      SUCCESFULLY MINTED: <span className={successStyle.numberMinted}>{mintValue.get()}</span> BEARDED BUDDIES
      </Text>
      <Text p={8}>
        {mintObject.get().hash}
      </Text>
      </div>
      <img src={checkIcon} />
      </>
    )
  }

  export default ModalSuccessfulState