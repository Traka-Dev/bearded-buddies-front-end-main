import styles from "./index.module.scss"
import { SimpleGrid } from '@mantine/core'
import  { useEffect } from "react";

const ModalInitialState = (props: any) => {
  useEffect(() => {
    console.log('props', props.nftImages)
  },[])
  return (
    <>
      <div>
        <div className={styles.container}>
          <SimpleGrid cols={4} >
            { props.nftImages? props.nftImages.map((nft: string, i: number ) => (
              <div key={i} className={styles.nftWrapper}>
              <div className={styles.nftNumber}><span>#{props.nftIdList[i]}</span></div>
              <div className={styles.nftImageWrapper}>
                <img src={nft}  className={styles.image}/>
              </div>
              <div className={styles.belowTextWrapper}>
                <span>{i}</span>
              </div>
            </div>
  )): null}
          </SimpleGrid>
        </div>
      </div>
  
    </>
  )
}

export default ModalInitialState;


