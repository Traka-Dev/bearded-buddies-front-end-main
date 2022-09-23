import React, { useEffect, useState } from "react"
import backgroundImage from "../../assets/images/nft-bg.png"
import logo from "../../assets/images/logo.png"
import Carousel from "./Carousel"
import { strings } from "../../data/nftSection"
import { isMobile } from "react-device-detect"
import img0 from '../../assets/images/myCollection/0.png'
import img1 from '../../assets/images/myCollection/1.png'
import img2 from '../../assets/images/myCollection/2.png'
import img3 from '../../assets/images/myCollection/3.png'
import img4 from '../../assets/images/myCollection/4.png'
import img5 from '../../assets/images/myCollection/5.png'
import img6 from '../../assets/images/myCollection/6.png'
import img7 from '../../assets/images/myCollection/7.png'
import img8 from '../../assets/images/myCollection/8.png'
import img9 from '../../assets/images/myCollection/9.png'
import img10 from '../../assets/images/myCollection/10.png'
import img11 from '../../assets/images/myCollection/11.png'
import img12 from '../../assets/images/myCollection/12.png'
import img13 from '../../assets/images/myCollection/13.png'
import img14 from '../../assets/images/myCollection/14.png'
import img15 from '../../assets/images/myCollection/15.png'
import styles from "./index.module.scss"

const chunks = [
  [
    {
      id: 0,
      image: img0,
    },
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ],
  [
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    {
      id: 7,
      image: img7,
    },
  ],
  [
    {
      id: 8,
      image: img8,
    },
    {
      id: 9,
      image: img9,
    },
    {
      id: 10,
      image: img10,
    },
    {
      id: 11,
      image: img11,
    },
  ],
  [
    {
      id: 12,
      image: img12,
    },
    {
      id: 13,
      image: img13,
    },
    {
      id: 14,
      image: img14,
    },
    {
      id: 15,
      image: img15,
    },
  ],
]

const arr = [
  {
    id: 0,
    image: img0,
  },
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
  {
    id: 9,
    image: img9,
  },
  {
    id: 10,
    image: img10,
  },
  {
    id: 11,
    image: img11,
  },
  {
    id: 12,
    image: img12,
  },
  {
    id: 13,
    image: img13,
  },
  {
    id: 14,
    image: img14,
  },
  {
    id: 15,
    image: img15,
  },
]

export function NftSection() {
  const [show, setShow] = useState(4)
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (isMobile) {
      setShow(1)
      return
    }
    setShow(4)
  }, [])
  return (
    <div id="collection" className={styles.wrapper}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt={strings.titleOne} />
          <div>
            <span className={styles.titleOne}>{strings.titleOne}</span>
            <span className={styles.titleTwo}>{strings.titleTwo}</span>
          </div>
          <div className={styles.carouselContainer}>
            <Carousel
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              show={show}
            >
              {isMobile
                ? chunks.map((items, index) => (
                    <div key={`collection-w-${index}`}>
                      <div className={styles.itemsWrapper}>
                        {items.map(item => (
                          <div
                            className={styles.itemContainer}
                            key={`collection-${item.id}`}
                          >
                            <div className={styles.itemWrapper}>
                              <img
                                className={styles.itemImg}
                                alt="test"
                                src={item.image}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                : arr.map(item => (
                    <div key={`collection-${item.id}`}>
                      <div className={styles.itemWrapper}>
                        <img
                          className={styles.itemImg}
                          alt="test"
                          src={item.image}
                        />
                      </div>
                    </div>
                  ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(NftSection)
