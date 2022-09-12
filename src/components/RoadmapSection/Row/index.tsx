import React from 'react';
import circle from "../../../assets/images/circle.png";
import styles from "./index.module.scss";

interface RowProps {
    label: string;
    body: string[];
}

export function Row({body, label}: RowProps) {
    return (
      <div className={styles.rowContainer}>
          <div className={styles.labelContainer}>
            <div className={styles.label}>{label}</div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={circle} alt="circle" />
          </div>
          <div className={styles.bodyContainer}>
              <div className={styles.bodyContent}>
                {
                    body.map((text, index) => <div key={`row-item-${index}`} className={styles.bodyText}>{text}</div>)
                }
              </div>
          </div>
      </div>
    );
}

export default React.memo(Row);