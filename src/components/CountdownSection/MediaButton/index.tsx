import React from 'react';
import styles from "./index.module.scss";
import { strings } from "../../../data/countdownSection";
import tiktokLogo from "../../../assets/icons/tiktok-logo.png";
import discordLogo from "../../../assets/icons/discord-logo.png";
import twitterLogo from "../../../assets/icons/twitter-logo.png";
import instagramLogo from "../../../assets/icons/instagram-logo.png";
import openseaLogo from "../../../assets/icons//open-sea.png";

interface MediaButtonProps {
    label?:string;
    title: string;
}

export function MediaButton({label, title}: MediaButtonProps) {
    let customStyles: string = '';
    let image = '';
    let link = '';
    if (title === strings.buttons.discord) {
        customStyles = styles.discord;
        image = discordLogo;
        link = "https://discord.gg/aWjmfuucZa";
    }

    if (title === strings.buttons.twitter) {
        customStyles = styles.twitter;
        image = twitterLogo;
        link = "https://twitter.com/beardedbudd1es";
    }

    if (title === strings.buttons.insta) {
        customStyles = styles.instagram;
        image = instagramLogo;
        link = "https://www.instagram.com/officialbeardedbuddies";
    }

    if (title === strings.buttons.tiktok) {
        customStyles = styles.tiktok;
        image = tiktokLogo;
        link = "https://www.tiktok.com/@beardedbuddiesofficial";
    }

    if (title === strings.buttons.opensea) {
        customStyles = styles.opensea;
        image = openseaLogo;
    }
    return (
      <a
        href={link}
        className={`${styles.button} ${customStyles} ${label ? styles.big: styles.small}`}
        target='_blank'
        rel="noopener noreferrer"
      >
          {label ? <div className={styles.label}>{label}</div>: null}
          <img className={styles.logo} src={image} alt={title} />
          <div className={styles.title}>{title}</div>
      </a>
    );
}

export default React.memo(MediaButton);