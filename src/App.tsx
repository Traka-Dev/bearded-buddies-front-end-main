import React from 'react';
import Landing from './pages/Landing';
import './sass/base/index.scss';
import styles from "./App.module.scss";
import Web3Provider from './context/web3Context';

function App() {
  return (
    <Web3Provider>
    <div className={styles.wrapper}>
      <Landing />
    </div>
    </Web3Provider>
  );
}

export default App;
