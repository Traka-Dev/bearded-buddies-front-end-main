import React, { createRef, useEffect } from 'react';
import { strings } from "../../data/teamSection";
import styles from "./index.module.scss";
import Gabriel from "../../assets/images/gabriel.png";
import Ignacio from "../../assets/images/ignacio.png";
import Melisa from "../../assets/images/melisa.png";
import Alejandro from "../../assets/images/alejandro.png";
import Marco from "../../assets/images/marco.png";
import Samuel from "../../assets/images/samuel.png";
import Adrian from "../../assets/images/adrian.png";
import Luis from '../../assets/images/luis.png'
import Member, {ListProps} from './Member';
import lottie from "lottie-web";
import planetAnimation from "../../assets/gifs/team-planet/data.json";

const customMemberClass = (index: number): string => {
    if (index === 0) {
        return styles.rowOneMember;
    }
    return styles.rowTwoMember;
}

const isFirstRow = (index: number): boolean => {
    return index === 0
}

export function TeamSection() {
    const planetContainer1 = createRef<HTMLDivElement>();
    const planetContainer2 = createRef<HTMLDivElement>();
    const planetContainer3 = createRef<HTMLDivElement>();

    const members: ListProps[][] = [
        [
            {image: Gabriel, image2: false},
            {image: Ignacio, image2: false},
            {image: Melisa, image2: false},
            {image: Alejandro, image2: false},
        ],[
            {image: Luis, image2: true},
            {image: Marco, image2: false},
            {image: Samuel, image2: false},
            {image: Adrian, image2: false}
        ]
    ];

    useEffect(() => {
        if (
            planetContainer1.current &&
            planetContainer2.current &&
            planetContainer3.current 
        ) {
            lottie.loadAnimation({
                container: planetContainer1.current,
                animationData: planetAnimation,
            })
            lottie.loadAnimation({
                container: planetContainer2.current,
                animationData: planetAnimation,
            })
            lottie.loadAnimation({
                container: planetContainer3.current,
                animationData: planetAnimation,
            })
        }
    }, [planetContainer1, planetContainer2, planetContainer3]);

    return (
        <div id="team" className={styles.wrapper}>
            <div className={styles.planet1} ref={planetContainer1} />
            <div className={styles.planet2} ref={planetContainer2} />
            <div className={styles.planet3} ref={planetContainer3} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                  <div className={styles.meet}>{strings.meet}</div>
                  <div className={styles.title}>{strings.title}</div>
                  <div className={styles.subtitle}>{strings.subtitle}</div>
                </div>
                {strings.team.map((memberList, x) =>
                    <div className={`${styles.membersContainer} ${styles.rowTwo}`}>
                        {memberList.map((member, y) =>
                            <Member
                                isFirstRow={isFirstRow(x)}
                                key={`member-${member.name}`}
                                name={member.name}
                                lastName={member.lastName}
                                role={member.role}
                                imageProps={members[x][y]}
                                //number={member.number}
                                // image={members[x][y].image}
                                // animationRef={members[x][y].animationRef}
                                // image2={members[x][y].image2}
                                linkedin={member.linkedin}
                                instagram={member.instagram}
                                twitter={member.twitter}
                                // custom={customMemberClass(x)}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default React.memo(TeamSection);