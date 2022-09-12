import React from 'react';
import { strings } from "../../../data/benefitsSection";
import styles from './index.module.scss';
import ring from "../../../assets/images/ring.png";

export interface itemProps {
    title: string;
    subtitle?: number;
    image: string;
    body: string;
}

export function Number({ title, subtitle, image, body }: itemProps) {
    let containerStyles = "";
    if (title === strings.events.title) {
        containerStyles = styles.events;
    }

    if (title === strings.airdrops.title) {
        containerStyles = styles.airdrops;
    }

    if (title === strings.sales.title) {
        containerStyles = styles.sales;
    }

    if (title === strings.network.title) {
        containerStyles = styles.network;
    }

    if (title === strings.dreamProject.title) {
        containerStyles = styles.dreamProject;
    }

    if (title === strings.nextProject.title) {
        containerStyles = styles.nextProject;
    }

    if (title === strings.ranks.title) {
        containerStyles = styles.ranks;
    }
    return (
        <div className={`${styles.wrapper} ${containerStyles}`}>
            <div className={styles.container}>
                <div className={styles.border} />
                <div className={styles.imageContainer}>
                    <img className={styles.ring} src={ring} alt={title} />
                    <img className={styles.image} src={image} alt={title} />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                    </div>
                    <div className={styles.body}>{body}</div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Number);
