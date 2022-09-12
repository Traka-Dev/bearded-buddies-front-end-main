import React, { createRef, useEffect } from "react"
import Countdown from "./Countdown"
import styles from "./index.module.scss"
import MediaButton from "./MediaButton"
import { strings } from "../../data/countdownSection"
import planetGif from "../../assets/images/countdown-planet-1.png"
import { useCountdown } from "../../hooks/useCountDown"
import lottie from "lottie-web"

const GifContainer = React.memo(() => {
  const bbContainer = createRef<HTMLDivElement>()
  useEffect(() => {
    if (bbContainer.current) {
      lottie.loadAnimation({
        container: bbContainer.current,
        path: "countdown-bb/data.json",
      })
    }
  }, [bbContainer])
  return (
    <div className={styles.gifContainer}>
      <div className={styles.buttonsContainer}>
        <div className={`${styles.buttonRow} ${styles.rowOne}`}>
          <MediaButton
            title={strings.buttons.discord}
            label={strings.buttons.joinUs}
          />
          <MediaButton
            title={strings.buttons.twitter}
            label={strings.buttons.followUs}
          />
        </div>
        <div className={`${styles.buttonRow} ${styles.rowTwo}`}>
          <MediaButton title={strings.buttons.insta} />
          <MediaButton title={strings.buttons.tiktok} />
          {/* <MediaButton title={strings.buttons.opensea} /> */}
        </div>
      </div>
      <div className={styles.gif} ref={bbContainer} />
      <div className={styles.topButtonContainer}>
        <MediaButton
          title={strings.buttons.discord}
          label={strings.buttons.joinUs}
        />
        <MediaButton
          title={strings.buttons.twitter}
          label={strings.buttons.followUs}
        />
      </div>
    </div>
  )
})

export function CountdownSection({ targetDate }: { targetDate: number }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.content}>
            <img className={styles.planet} alt="planet" src={planetGif} />
            <div className={styles.titleContainer}>
              <span className={styles.titleOne}>{strings.title.one}</span>
              <span className={styles.titleTwo}>{strings.title.two}</span>
              <span className={styles.titleThree}>{strings.title.three}</span>
            </div>
            <div className={styles.bodyText}>{strings.body}</div>
            <Countdown
              seconds={seconds}
              minutes={minutes}
              hours={hours}
              days={days}
            />
            <div className={styles.footerText}>{strings.footer}</div>
            <div className={styles.bottomButtonContainer}>
              <div className={`${styles.buttonRow} ${styles.rowTwo}`}>
                <MediaButton title={strings.buttons.insta} />
                <MediaButton title={strings.buttons.tiktok} />
                {/* <MediaButton title={strings.buttons.opensea} /> */}
              </div>
            </div>
          </div>
        </div>
        <GifContainer />
      </div>
    </div>
  )
}

export default React.memo(CountdownSection)
