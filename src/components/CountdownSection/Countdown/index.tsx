import React from 'react';
import { Number } from '../Number';
import styles from "./index.module.scss";
import stylesNum from '../Number/index.module.scss';
import { strings } from "../../../data/countdownSection";

interface CountdownProps {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

export function Countdown({seconds, minutes, hours, days}: CountdownProps) {
  if(seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
    return(
      <div className={styles.countdown}>
        <div className={stylesNum.container}>                          
          <div data-value={"Comming Soon"} className={stylesNum.number}>{'Comming Soon'}</div>           
        </div>
      </div>
    )
  }else{
    return (
      <div className={styles.countdown}>
          <Number label={strings.countdown.days} customStyle={{backgroundColor: 'rgba(0, 0, 0, .5)'}} number={days}/>
          <Number label={strings.countdown.hours} customStyle={{backgroundColor: 'rgba(0, 0, 0, .4)'}} number={hours} />
          <Number label={strings.countdown.minutes} customStyle={{backgroundColor: 'rgba(0, 0, 0, .3)'}} number={minutes} />
          <Number label={strings.countdown.seconds} customStyle={{backgroundColor: 'rgba(0, 0, 0, .2)'}} number={seconds} />
      </div>
    );
  }
}

export default React.memo(Countdown);