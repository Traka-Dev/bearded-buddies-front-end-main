import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";
import MintButton from "../MintButton";
import backgroundModal from "../../assets/images/modalAssets/Modal.svg";
import Modal, { useMintModal } from "../MintModal";
import store from "../../store/store";
import { useState } from "@hookstate/core";
import MyCollection, { useCollectionModal } from "../MyCollection";
import {isDesktop} from 'react-device-detect';

const modalStyle = {
  backgroundImage: `url(${backgroundModal})`,
  backgroundPosition: "center bottom",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  width: "1000px",
  height: "500px",
};
export function Menu({ handleVisible }: { handleVisible: () => void }) {
  const { isShowingMint, isShowingCollection } = useState(store);
  const { toggle } = useMintModal();
  const { toggleCollection } = useCollectionModal();

  const videoRef = useRef<HTMLVideoElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const attemptPlay = () => {
    videoRef && videoRef.current && videoRef.current.play();
  };

  const VideoComponent = ({className, src, poster}: {className: string, src: string, poster: string}) => {
    return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      playsInline
      loop
      onCanPlayThrough={() => {
        handleVisible();
        attemptPlay();
      }}
    >
       <source
            src={src}
            type="video/mp4"
          />
    </video>);
  };

  useEffect(() => {
    bannerRef.current?.addEventListener("touchstart", () => {
      attemptPlay();
    });
    videoRef?.current?.play();
  }, []);

  return (
    <div ref={bannerRef} className={styles.wrapper}>
      <div className={styles.container}>
        {isDesktop ? (
         <VideoComponent poster={bannerImg} className={styles.video} src="https://storage.googleapis.com/beardedbuddies/banner.mp4" />
          ) : null}
          <VideoComponent poster="https://storage.googleapis.com/beardedbuddies/banner-responsive.png" className={styles.mobileImg} src="https://storage.googleapis.com/beardedbuddies/banner-responsive.mp4" />
        <img className={styles.logo} src={logo} alt="logo" />
      </div>     
      <MintButton title="Mint" customClass={styles.mint} open={toggle} />
      <Modal {...{ isShowingMint, toggle }} />
      <MyCollection {...{ isShowingCollection, toggleCollection }} />
    </div>
  );
}

export default React.memo(Menu);
