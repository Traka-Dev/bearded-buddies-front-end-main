import React, {createRef, useCallback, useEffect, useState} from "react";
import ring from "../../assets/images/ring.png";
import arrow from "../../assets/images/bottom-arrow.png";
import subscribeButton from "../../assets/images/subscribe-btn.png";
import modalBg from "../../assets/images/subscribe-modal-bg.png";
import logo from "../../assets/images/logo.png";
import {strings} from "../../data/subscribeSection"
import styles from "./index.module.scss";
import lottie from "lottie-web";
import { Modal, Text, TextInput } from '@mantine/core';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { LOADING_TIMEOUT } from "../../constants/timeout";

const url =
    "https://beardedbuddies.us10.list-manage.com/subscribe/post?u=1cc5e0b62ae9c692cb295ad29&amp;id=1bfc106647";

const validEmail = (email: string) => {
    return email.indexOf("@") > -1;
}

const errorMessage = "Please write a valid email.";

const CustomForm = ({onSubmitted, status}: {onSubmitted: any, status: string}) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const submit = () => {
        setError("");

        if (!validEmail(email)) {
            setError(errorMessage);
            return;
        }
        
        email &&
        onSubmitted({
        EMAIL: email,
        });
    }

    const handleChange = (e: any) => {
        setEmail(e.target.value);
    }

    return (

        <div className={styles.modal}>
            <div className={styles.modalBg} style={{backgroundImage: `url(${modalBg})`}}>
                <img className={styles.logo} src={logo} alt="Bearded Buddies" />
            </div>
            <div  className={styles.modalInfo}>
                <div className={styles.formContainer}>
                    <Text className={styles.label}  size="sm">Get Notified</Text>
                    <div className={styles.form}>
                        <TextInput placeholder="Your email address" onChange={handleChange} value={email} className={styles.input} ></TextInput>
                        <button onClick={submit} className={styles.modalButton}>SUBMIT</button>
                    </div>
                    {error ? <Text color="red" className={styles.label}>{error}</Text> : null}
                    {status === "error" ? <Text color="red" className={styles.label}>{errorMessage}</Text> : null}
                    {status === "sending" ? <Text color="yellow" className={styles.label}>Sending...</Text> : null}
                    {status === "success" ? <Text color="green" className={styles.label}>Thanks for subscribing!</Text> : null}
                </div>
            </div>
        </div>

    );
}

export function SubscribeSection({ planet = false, handleLoading } : { planet?: boolean, handleLoading?: () => void}) {
    const planetContainer1 = createRef<HTMLDivElement>();
    const headContainer = createRef<HTMLDivElement>();
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    const path = planet ? "subscribe-bb-1/data.json" : "subscribe-bb-2/data.json";

    useEffect(() => {

      if (planetContainer1.current && !count) {
          lottie.loadAnimation({
              container: planetContainer1.current,
              path: "countdown-planet-2/data.json",
          })
      }
      if (headContainer.current) {
        const animation = lottie.loadAnimation({
            container: headContainer.current,
            path,
            autoplay: true,
        })
        animation.addEventListener('loaded_images', function() {
            if (handleLoading) {
                handleLoading();
            }
          })
          
    }
  }, [planetContainer1, headContainer, path, planet, handleLoading, count, open]);


  const GifContainer = useCallback(() => 
    <div className={styles.gifContainer}>
        <img className={styles.ring} src={ring} alt="Subscribe" />
      <div className={styles.bodyBB} ref={headContainer} />
    </div>, [])
  

    return (
      <div className={styles.wrapper}>
        <Modal opened={open} onClose={() => setOpen(false)}>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    // @ts-ignore: Unreachable code error
                    <CustomForm status={status} onSubmitted={(formData:any) => {
                        subscribe(formData);
                        if (status === "success") {
                            setTimeout(() => {
                                setOpen(false);
                            }, LOADING_TIMEOUT)
                        }
                    }} />
                )}
            />
        </Modal>
          
          { planet ? <div className={styles.planet} ref={planetContainer1} /> : null}
          <div className={styles.container}>
              <div className={styles.leftSide}>
                <GifContainer />
              </div>
              <div className={styles.rightSide}>
                    <div>
                        <span className={styles.titleOne}>{strings.titleOne}</span>
                        <span className={styles.titleTwo}>{strings.titleTwo}</span>
                  </div>
                  <div>
                        <div className={styles.body}>{strings.bodyOne}</div>
                        <div className={styles.body}>{strings.bodyTwo}</div>
                        <div className={styles.body}>{strings.bodyThree}</div>
                        <div className={styles.body}>{strings.bodyFour}</div>
                        <div className={styles.arrowContainer}>
                            <img className={styles.arrow} src={arrow} alt="Subscribe" />
                        </div>
                        <a
                            className={styles.buttonContainer}
                            onClick={() => {
                                setCount(1);
                                setOpen(true);
                            }}
                        >
                            <img className={styles.button} src={subscribeButton} alt="Subscribe" />
                        </a>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default React.memo(SubscribeSection);