import styles from "../index.module.scss";
import {Text} from '@mantine/core'
import loadingBar from "../../../assets/images/modalAssets/loading.svg"


const ModalLoadingState = () => {
    return (
      <>
      <Text className={styles.biggerText} style={{color: 'white'}}>
      Please wait while the transaction happens
      </Text>
      <Text className={styles.mediumText} style={{color: 'white'}}>
      Be patient this might take a while
      </Text>
      <img src={loadingBar} />
      </>
    )
  }

  export default ModalLoadingState