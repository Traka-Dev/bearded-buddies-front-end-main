import React, {createRef, useEffect} from "react";
import eventsLogo from "../../assets/icons/events.png";
import airdropLogo from "../../assets/icons/airdrop.png";
import salesLogo from "../../assets/icons/sales.png";
import networkLogo from "../../assets/icons/network.png";
import dreamProjectLogo from "../../assets/icons/dream-project.png";
import nextProjectLogo from "../../assets/icons/next-project.png";
import rankLogo from "../../assets/icons/ranks.png";
import styles from "./index.module.scss";
import Item, { itemProps } from "./Item";
import { strings } from "../../data/benefitsSection";
import planet from "../../assets/images/benefits-planet.png";
import lottie from "lottie-web";

const items: itemProps[] = [
    {
        image: eventsLogo,
        title: strings.events.title,
        body: strings.events.body,
    },
    {
        image: airdropLogo,
        title: strings.airdrops.title,
        body: strings.airdrops.body,
    },
    {
        image: salesLogo,
        title: strings.sales.title,
        body: strings.sales.body,
    },
    {
        image: networkLogo,
        title: strings.network.title,
        body: strings.network.body,
    },
    {
        image: dreamProjectLogo,
        title: strings.dreamProject.title,
        body: strings.dreamProject.body,
    },
    {
        image: nextProjectLogo,
        title: strings.nextProject.title,
        body: strings.nextProject.body,
    },
    {
        image: rankLogo,
        title: strings.ranks.title,
        body: strings.ranks.body,
    },
]

function BenefitsSection() {
    const planetContainer1 = createRef<HTMLDivElement>();
    const planetContainer2 = createRef<HTMLDivElement>();
    useEffect(() => {
      if (planetContainer1.current) {
          lottie.loadAnimation({
              container: planetContainer1.current,
              path: "benefits-planet-1/data.json",
          })
      }
      if (planetContainer2.current) {
        lottie.loadAnimation({
            container: planetContainer2.current,
            path: "benefits-planet-2/data.json",
        })
    }
  }, [planetContainer1, planetContainer2]);
  return (
    <div id="benefits" className={styles.wrapper}>
        <div className={styles.planet1} ref={planetContainer1} />
        <div className={styles.planet2} ref={planetContainer2} />
        <div className={styles.title}>{strings.title}</div>
      <div className={styles.container}>
          <img className={styles.planet} src={planet} alt="benefits" />
          {items.map(item =>
            <Item key={`benefit-${item.title}`} {...item} />
          )}
      </div>
    </div>
  );
}

export default React.memo(BenefitsSection);
