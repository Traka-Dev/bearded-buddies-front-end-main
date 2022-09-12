import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/nft-bg.png";
import logo from "../../assets/images/logo.png";
import Carousel from "./Carousel";
import { strings } from "../../data/nftSection";
import { isMobile } from "react-device-detect";
import styles from "./index.module.scss";

const chunks = [
  [
    {
      id: 0,
      image: "https://storage.googleapis.com/beardedbuddies/collection-1.png",
    },
    {
      id: 1,
      image: "https://storage.googleapis.com/beardedbuddies/collection-2.png",
    },
    {
      id: 2,
      image: "https://storage.googleapis.com/beardedbuddies/collection-3.png",
    },
    {
      id: 3,
      image: "https://storage.googleapis.com/beardedbuddies/collection-4.png",
    },
  ],
  [
    {
      id: 4,
      image: "https://storage.googleapis.com/beardedbuddies/collection-5.png",
    },
    {
      id: 5,
      image: "https://storage.googleapis.com/beardedbuddies/collection-6.png",
    },
    {
      id: 6,
      image: "https://storage.googleapis.com/beardedbuddies/collection-7.png",
    },
    {
      id: 7,
      image: "https://storage.googleapis.com/beardedbuddies/collection-8.png",
    },
  ],
  [
    {
      id: 8,
      image: "https://storage.googleapis.com/beardedbuddies/collection-9.png",
    },
    {
      id: 9,
      image: "https://storage.googleapis.com/beardedbuddies/collection-10.png",
    },
    {
      id: 10,
      image: "https://storage.googleapis.com/beardedbuddies/collection-11.png",
    },
    {
      id: 11,
      image: "https://storage.googleapis.com/beardedbuddies/collection-12.png",
    },
  ],
  [
    {
      id: 12,
      image: "https://storage.googleapis.com/beardedbuddies/collection-13.png",
    },
    {
      id: 13,
      image: "https://storage.googleapis.com/beardedbuddies/collection-14.png",
    },
    {
      id: 14,
      image: "https://storage.googleapis.com/beardedbuddies/collection-15.png",
    },
    {
      id: 15,
      image: "https://storage.googleapis.com/beardedbuddies/collection-16.png",
    },
  ],
];

const arr = [
  {
    id: 0,
    image: "https://storage.googleapis.com/beardedbuddies/collection-1.png",
  },
  {
    id: 1,
    image: "https://storage.googleapis.com/beardedbuddies/collection-2.png",
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/beardedbuddies/collection-3.png",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/beardedbuddies/collection-4.png",
  },
  {
    id: 4,
    image: "https://storage.googleapis.com/beardedbuddies/collection-5.png",
  },
  {
    id: 5,
    image: "https://storage.googleapis.com/beardedbuddies/collection-6.png",
  },
  {
    id: 6,
    image: "https://storage.googleapis.com/beardedbuddies/collection-7.png",
  },
  {
    id: 7,
    image: "https://storage.googleapis.com/beardedbuddies/collection-8.png",
  },
  {
    id: 8,
    image: "https://storage.googleapis.com/beardedbuddies/collection-9.png",
  },
  {
    id: 9,
    image: "https://storage.googleapis.com/beardedbuddies/collection-10.png",
  },
  {
    id: 10,
    image: "https://storage.googleapis.com/beardedbuddies/collection-11.png",
  },
  {
    id: 11,
    image: "https://storage.googleapis.com/beardedbuddies/collection-12.png",
  },
  {
    id: 12,
    image: "https://storage.googleapis.com/beardedbuddies/collection-13.png",
  },
  {
    id: 13,
    image: "https://storage.googleapis.com/beardedbuddies/collection-14.png",
  },
  {
    id: 14,
    image: "https://storage.googleapis.com/beardedbuddies/collection-15.png",
  },
  {
    id: 15,
    image: "https://storage.googleapis.com/beardedbuddies/collection-16.png",
  },
];

export function NftSection() {
  const [show, setShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (isMobile) {
      setShow(1);
      return;
    }
    setShow(4);
  }, []);
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
                        {items.map((item) => (
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
                : arr.map((item) => (
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
  );
}

export default React.memo(NftSection);
