import React from 'react';
import styles from './index.module.scss';
import logo from "../../assets/images/logo.png";

export function Loading({loading}: {loading: boolean}) {
    if (loading) {
        return null;
    }
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logo} alt="logo" />
        </div>
    );
}

export default Loading;
