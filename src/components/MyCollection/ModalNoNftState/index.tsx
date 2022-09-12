import styles from "../index.module.scss";
import {Text} from '@mantine/core'
import loadingBar from "../../../assets/images/modalAssets/loading.svg"


const ModalNoNftState = () => {
    return (
      <>
      <Text className={styles.biggerText} style={{color: 'white'}}>
     You own no NFTs. Please mint!
      </Text>
    
      </>
    )
  }

  export default ModalNoNftState