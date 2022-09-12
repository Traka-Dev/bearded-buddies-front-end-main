import React, { useEffect, useState} from "react";
import styles from "./index.module.scss";
import Row from './Row';
import { strings } from "../../data/roadmapSection";
import BgImage from "../../assets/images/about-us-bg.png";
import { LOADING_TIMEOUT } from "../../constants/timeout";

export function RoadmapSection() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, LOADING_TIMEOUT);
    })

    if (!visible) {
        return null;
    }

    return (
        <div id="roadmap" className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>{strings.title}</div>
                <div>
                    {strings.table.map(row => 
                        <Row key={`row-${row.id}`} label={row.label} body={row.body} />
                    )}
                </div>
            </div>
            <video className={styles.video} poster={BgImage} autoPlay muted loop>
                <source src="https://storage.googleapis.com/bearded-buddies-test/roadmap-bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default React.memo(RoadmapSection);