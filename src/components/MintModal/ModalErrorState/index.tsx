import styles from "../index.module.scss";
import {Text} from '@mantine/core'
import errorIcon from "../../../assets/images/modalAssets/ErrorCircle.svg"

const ModalErrorState = () => {
    return (
      <>
      <Text className={styles.biggerText} style={{color: 'white'}}>
      There was an error with the transaction
      </Text>
      <Text className={styles.mediumText} style={{color: 'white'}}>
      Please check your metamask for more details
      </Text>
      <img src={errorIcon} />
      </>
    )
  }

  export default ModalErrorState