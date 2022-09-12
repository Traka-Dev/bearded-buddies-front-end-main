import React from 'react';
import styles from "./index.module.scss";

interface MediaButtonProps {
    label:string;
    title: string;
    image: string;
    link: string;
}

export function MediaButton({label, title, image, link}: MediaButtonProps) {
    return (
      <a
        href={link}
        className={styles.button}
        target='_blank'
        rel="noopener noreferrer"
      >
          <div className={styles.label}>{label}</div>
          <img className={styles.logo} src={image} alt={title} />
          <div className={styles.title}>{title}</div>
      </a>
    );
}

export default React.memo(MediaButton);