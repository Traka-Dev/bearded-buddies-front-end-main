import React, {createRef, useEffect} from "react";
// import animatedBb from "../../assets/gifs/about-us-body.gif";
import logo from "../../assets/images/logo.png";
import { strings } from "../../data/aboutUsSection";
import styles from "./index.module.scss";
import videoBorder from "../../assets/images/video-border.png";
import BgImage from "../../assets/images/about-us-bg.png";
import leftCard from "../../assets/images/about-us-card-1.png";
// import centerCard from "../../assets/images/about-us-body.png";
import rightCard from "../../assets/images/about-us-card-2.png";
import lottie from "lottie-web";
import { isDesktop } from "react-device-detect";
import { text } from "stream/consumers";

export function AboutUsSection({isMobile}:{isMobile: boolean}) {
    const planetContainer1 = createRef<HTMLDivElement>();
    const planetContainer2 = createRef<HTMLDivElement>();
    const planetContainer3 = createRef<HTMLDivElement>();
    const cardContainer = createRef<HTMLDivElement>();

    const mobileStyles = { backgroundImage: `url(${BgImage})` }

    useEffect(() => {
        if (planetContainer1.current) {
            lottie.loadAnimation({
                container: planetContainer1.current,
                path: "about-us-planet-1/data.json",
            })
        }
        if (planetContainer2.current) {
            lottie.loadAnimation({
                container: planetContainer2.current,
                path: "about-us-planet-2/data.json",
            })
        }
        if (planetContainer3.current) {
            lottie.loadAnimation({
                container: planetContainer3.current,
                path: "about-us-planet-3/data.json",
            })
        }
        if (cardContainer.current) {
            lottie.loadAnimation({
                container: cardContainer.current,
                path: "BB TARJETA/data.json",
            })
        }
    }, [cardContainer, planetContainer1, planetContainer2, planetContainer3]);
    return (
        <div style={isMobile ? mobileStyles : {}} id="about" className={styles.wrapper}>
            <div className={styles.layout} />
            <div className={styles.planet1} ref={planetContainer1} />
            <div className={styles.planet2} ref={planetContainer2} />
            <div className={styles.planet3} ref={planetContainer3} />
            {!isMobile ? (
                <video className={styles.video} poster={BgImage} autoPlay muted loop>
                    <source src="https://storage.googleapis.com/beardedbuddies/about-us-bg.mp4" type="video/mp4" />
                </video>
            ) : null }
            <div className={styles.container}>
                <div className={styles.title}>{strings.title}</div>
                <div className={styles.gifContainer}>
                    <div className={styles.gif} ref={cardContainer} />
                    <img className={styles.leftImg} src={leftCard}  alt={strings.title} />
                    <img className={styles.rightImg} src={rightCard}  alt={strings.title} />
                </div>
                <img className={styles.logo} src={logo} alt={strings.title} />
                {/* {isDesktop ? ( */}
                    <div className={styles.videoBorder} >
                        <img className={styles.videoBorderImg} src={videoBorder} alt="bb" />
                        <iframe className={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/dVpOgtpnPCw?rel=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=dVpOgtpnPCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                {/* ) : null} */}
                <div className={styles.textContainer}>
                    {strings.body.map(item =>
                        <div key={`about-us-${item.id}`} className={styles.paragraph}>
                            {item.arr.map(text => {
                            if(text.hasOwnProperty("list")){
                                return(       
                                <>   
                                <br/>                     
                                <li key={`about-us-${item.id}-${text.text}`} className={`${styles.text} ${text.pink ? styles.pink : '' }`}>
                                    {text.text}
                                </li></>)
                            }
                            return(
                            <span key={`about-us-${item.id}-${text.text}`} className={`${styles.text} ${text.pink ? styles.pink : '' }`}>{text.text}</span>)
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default React.memo(AboutUsSection);