import styles from "../index.module.scss";
import {Text} from '@mantine/core'
import errorIcon from "../../../assets/images/modalAssets/ErrorCircle.svg"

const ModalErrorState = () => {
    return (
      <>
      <Text className={styles.biggerText} style={{color: 'white'}}>
      There was an error retrieving the NFTs. Please try again in a moment.
      </Text>
      <img src={errorIcon} />
      </>
    )
  }

  export default ModalErrorState