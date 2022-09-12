import styles from "../index.module.scss";
import {Text} from '@mantine/core'
import loadingBar from "../../../assets/images/modalAssets/loading.svg"


const ModalLoadingState = () => {
    return (
      <>
      <Text className={styles.biggerText} style={{color: 'white'}}>
      Please wait while the NFTs are being retrieved.
      </Text>
      <Text className={styles.mediumText} style={{color: 'white', textAlign: 'center'}}>
      Be patient this might take a while
      </Text>
      <div style={{textAlign: 'center'}}>
      <img src={loadingBar} />
      </div>
      </>
    )
  }

  export default ModalLoadingState