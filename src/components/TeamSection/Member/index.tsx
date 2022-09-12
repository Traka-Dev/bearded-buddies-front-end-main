import React, { RefObject }  from 'react';
import linkedinLogo from "../../../assets/icons/linkedin-logo.png";
import instagramLogo from "../../../assets/icons/instagram-logo.png";
import twitterLogo from "../../../assets/icons/twitter-logo.png";
import styles from './index.module.scss';

export interface ListProps {
    image?: string;
    image2?: boolean;
    animationRef?: RefObject<HTMLDivElement>;
}
interface MemberProps {
    name: string;
    number?: string;
    lastName: string;
    role: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    // custom: string;
    imageProps: ListProps;
    isFirstRow: boolean;
}

interface ButtonLogoProps {
    alt: string;
    logo: string;
    link: string;
}

const ButtonLogo = ({alt, logo, link}: ButtonLogoProps) => (
    <a
      href={link}
      className={styles.logo}
      target='_blank'
      rel="noopener noreferrer"
    >
        <img src={logo} alt={alt} />
    </a>
)

export function Member({name, lastName, role, imageProps, linkedin, instagram, twitter, number, isFirstRow }: MemberProps) {
    return (
        <div className={styles.container}>
            <div className={`${styles.itemContainer} ${isFirstRow ? styles.firstRow : ""}`}>
                {imageProps.animationRef ?
                    <div className={`${styles.animation} ${styles.image}`} ref={imageProps.animationRef} />
                : <img className={imageProps.image2 ? styles.image2 : styles.image} src={imageProps.image} alt={`${name} ${lastName}`} /> }
                <div className={`${styles.infoContianer} ${number ? styles.numberContainer : ""}`}>
                    <div className={styles.namesContainer}>
                        {number ? (
                            <div><span className={styles.number}>{number}</span><span className={styles.smallName}>{name.toUpperCase()}</span></div>
                        ): (
                            <div className={styles.name}>{name.toUpperCase()}</div>
                        )}
                        <div className={styles.name}>{lastName.toUpperCase()}</div>
                    </div>
                    <div className={styles.role}>{role}</div>
                    <div className={`${styles.mediaContainer} ${styles.showDesktop}`}>
                        {linkedin ? <ButtonLogo alt='linkedin' logo={linkedinLogo} link={linkedin} />  : null }
                        {instagram ? <ButtonLogo alt='instagram' logo={instagramLogo} link={instagram} /> : null}
                        {twitter ? <ButtonLogo alt='twitter' logo={twitterLogo} link={twitter} /> : null}
                    </div>
                </div>
                <div className={`${styles.mediaContainer} ${styles.showMobile}`}>
                    {linkedin ? <ButtonLogo alt='linkedin' logo={linkedinLogo} link={linkedin} />  : null }
                    {instagram ? <ButtonLogo alt='instagram' logo={instagramLogo} link={instagram} /> : null}
                    {twitter ? <ButtonLogo alt='twitter' logo={twitterLogo} link={twitter} /> : null}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Member);
