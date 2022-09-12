import React, {createRef, useEffect} from "react";
import styles from "./index.module.scss";
import { strings } from "../../data/footer";
import MediaButton from "./MediaButton";
import twitterLogo from "../../assets/icons/twitter-blue-logo.png";
import discordLogo from "../../assets/icons/discord-logo.png";
import logo from "../../assets/images/logo.png";
import lottie from "lottie-web";
import planet1 from "../../assets/gifs/contact-us-planet-1/data.json";
import planet2 from "../../assets/gifs/contact-us-planet-2/data.json";

function FooterSection() {
  const planetContainer1 = createRef<HTMLDivElement>();
  const planetContainer2 = createRef<HTMLDivElement>();
  useEffect(() => {
      if (planetContainer1.current && planetContainer2.current) {
          lottie.loadAnimation({
              container: planetContainer1.current,
              animationData: planet1,
          })
          lottie.loadAnimation({
              container: planetContainer2.current,
              animationData: planet2,
          })
      }
  }, [planetContainer1, planetContainer2]);

  return (
    <div id="contact" className={styles.wrapper}>
      <div className={styles.planet1} ref={planetContainer1} />
      <div className={styles.planet2} ref={planetContainer2} />
      <div className={styles.container}>
          <div className={styles.title}>{strings.title}</div>
          <div className={styles.text}>{strings.subtitle}</div>
          <div className={styles.mediaContainer}>
            <MediaButton
                label={strings.twitter.label}
                title={strings.twitter.title}
                image={twitterLogo}
                link="https://twitter.com/beardedbudd1es"
            />
            <MediaButton
                label={strings.discord.label}
                title={strings.discord.title}
                image={discordLogo}
                link="https://discord.gg/aWjmfuucZa"
            />
          </div>
          <div>
              {strings.body.map(body =>
                <div key={body} className={`${styles.text} ${styles.body}`}>{body}</div>
              )}
          </div>
          <img className={styles.logo} src={logo} alt={strings.title} />
      </div>
    </div>
  );
}

export default React.memo(FooterSection);
