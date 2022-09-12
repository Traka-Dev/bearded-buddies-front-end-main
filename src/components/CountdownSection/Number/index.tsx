import React, {CSSProperties} from 'react';
import styles from './index.module.scss';

interface NumberProps {
    label: string;
    number: number;
    customStyle?: CSSProperties
}

const padWithZero = (num: number) => {
    return String(num).padStart(2, '0')
  }

export function Number({label, number, customStyle}: NumberProps) {
    return (
        <div className={styles.container}>
            <div className={styles.numberContainer} style={customStyle}>
                <div className={styles.brownLine} />
                <div className={styles.whiteLine} />
                <div className={styles.blackLine} />
                <div data-value={padWithZero(number)} className={styles.number}>{padWithZero(number)}</div>
            </div>
            <div className={styles.label}>{label.toUpperCase()}</div>
        </div>
    );
}

export default React.memo(Number);
