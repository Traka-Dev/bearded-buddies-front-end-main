import React, {createRef, useCallback, useEffect, useState} from "react";
import styles from "./index.module.scss";
import arrow from "../../assets/icons/bottom-arrow.png";
import { strings } from "../../data/faqSection";
import lottie from "lottie-web";

interface FaqRowProps {
    id: number;
    question: string;
    answers: string[];
}

const FaqRow = ({id,question, answers}: FaqRowProps) => {
    const [active, setActive] = useState(true);
    const answerRef = createRef<HTMLDivElement>();
    const hiddenContainerStyle = { height: "0px"};
    const hiddenTextStyle = { opacity: "0", display: "none" };
    const showTestStyle = { opacity: "1", display: "block"}
    const arrowStyle = { transform: "translateX(-25%) translateY(65%) rotate(90deg)" };

    const handleClick = useCallback(() => {
        setActive(!active);
    }, [active])

    return (
        <div key={`faq-${id}`}>
            <div onClick={handleClick} className={styles.questionContainer}>
                <div className={styles.question}>{question}</div>
                <div>
                    <img style={active ? arrowStyle: {}} className={styles.arrow} src={arrow} alt={strings.title} />
                </div>
            </div>
            <div style={active ? hiddenContainerStyle : {}} ref={answerRef} className={styles.answerContainer}>
                {answers.map((answer, index) =>
                    <div style={active ? hiddenTextStyle: showTestStyle } key={`faq-ans-${id}-${index}`} className={styles.answer}>{answer}</div>
                )}
            </div>
        </div>
    )
}

function FaqSection() {
  const planetContainer1 = createRef<HTMLDivElement>();
  useEffect(() => {
      if (planetContainer1.current) {
          lottie.loadAnimation({
              container: planetContainer1.current,
              path: "faq-planet/data.json",
          })
      }
  }, [planetContainer1]);
  return (
    <div id="faq" className={styles.wrapper}>
      <div className={styles.planet} ref={planetContainer1} />
      <div className={styles.container}>
          <div className={styles.title}>{strings.title}</div>
          {
              strings.faq.map(faq =>
                <FaqRow answers={faq.answer} id={faq.id} question={faq.question} />
              )
          }
      </div>
    </div>
  );
}

export default React.memo(FaqSection);
