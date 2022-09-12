import React, { useEffect, createRef, useState } from "react";
import backgroundImage from "../../assets/images/red-rose-clan-mobile-bg.png";
import arm from "../../assets/images/red-rose-clan-arm.png";
import body from "../../assets/images/red-rose-clan-body.png";
import money2 from "../../assets/images/money2.png";
import money3 from "../../assets/images/money3.png";
import money4 from "../../assets/images/money4.png";
import money5 from "../../assets/images/money5.png";
import money6 from "../../assets/images/money6.png";
import money7 from "../../assets/images/money7.png";
import { strings } from "../../data/redRoseClanSection";
import styles from "./index.module.scss";
import lottie from "lottie-web";
import { isDesktop } from "react-device-detect";

export function RedRoseClanSection() {
  const bodyContainer = createRef<HTMLDivElement>();
  const [showArm, setShowArm] = useState(false);

  useEffect(() => {
    if (bodyContainer.current && !showArm && isDesktop) {
      const animation = lottie.loadAnimation({
        container: bodyContainer.current,
        path: "red-rose-clan-head/data.json",
      });
      animation.addEventListener("loaded_images", function () {
        setShowArm(true);
        console.log("loaded_images");
      });
    }
  }, [bodyContainer, showArm]);

  const InfoContainer = () => {
    return (
      <div className={styles.infoContainer}>
        <div className={`${styles.title} ${styles.showDesktop}`}>
          {strings.title}
        </div>
        <div className={styles.bodyContainer}>
          <div
            className={`${styles.text} ${styles.body} ${styles.showDesktop}`}
          >
            {strings.body[0].text}
          </div>
          <div className={`${styles.text} ${styles.body}`}>
            {strings.body[1].text}
          </div>
        </div>
        <div className={styles.labelContainer}>
          {strings.labels.map((label) => (
            <div key={`rrc-label-${label.id}`} className={styles.label}>
              <div className={styles.text}>{label.text}</div>
            </div>
          ))}
        </div>
        <img
          className={`${styles.money7} ${styles.money}`}
          src={money7}
          alt={strings.title}
        />
        <img
          className={`${styles.money8} ${styles.money}`}
          src={money2}
          alt={strings.title}
        />
      </div>
    );
  };

  return (
    <div
      id="redRoseClan"
      className={styles.wrapper}
    >
      <div className={styles.showMobile}>
        <div className={`${styles.title}`}>{strings.title}</div>
        <div className={`${styles.text} ${styles.body}`}>
          {strings.body[0].text}
        </div>
      </div>

      {isDesktop ? (
        <div className={styles.bbContainer}>
          {showArm ? (
            <img src={body} className={styles.bb} alt={strings.title} />
          ) : null}
          <div className={styles.head} ref={bodyContainer} />
          <img
            className={`${styles.money1} ${styles.money}`}
            src={money3}
            alt={strings.title}
          />
          <img
            className={`${styles.money2} ${styles.money}`}
            src={money2}
            alt={strings.title}
          />
          <img
            className={`${styles.money3} ${styles.money}`}
            src={money4}
            alt={strings.title}
          />
          <img
            className={`${styles.money4} ${styles.money}`}
            src={money6}
            alt={strings.title}
          />
          <img
            className={`${styles.money5} ${styles.money}`}
            src={money5}
            alt={strings.title}
          />
          <img
            className={`${styles.money6} ${styles.money}`}
            src={money6}
            alt={strings.title}
          />
          <img
            className={`${styles.money7} ${styles.money}`}
            src={money7}
            alt={strings.title}
          />
          <img
            className={`${styles.money8} ${styles.money}`}
            src={money2}
            alt={strings.title}
          />
          {showArm ? (
            <img className={styles.arm} src={arm} alt={strings.title} />
          ) : null}
        </div>
      ) : null}
      {isDesktop ? <InfoContainer /> : null}
      {!isDesktop ? (
        <div className={styles.content}>
          <div className={styles.bbContainer}>
            <img
              className={styles.bbMobile}
              src="https://storage.googleapis.com/beardedbuddies/rrb-bb.png"
              alt={strings.title}
            />
          </div>
          <InfoContainer />
        </div>
      ) : null}
      <img
        className={`${styles.rock} ${styles.showMobile}`}
        src="https://storage.googleapis.com/beardedbuddies/rock.png"
        alt={strings.title}
      />
    </div>
  );
}

export default React.memo(RedRoseClanSection);
