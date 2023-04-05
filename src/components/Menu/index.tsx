import { useState } from "@hookstate/core";
import React from "react";
import store from "../../store/store";
import MintButton from "../MintButton";
import { useMintModal } from "../MintModal";
import styles from "./index.module.scss";
import useWeb3 from "../../hooks/useWeb3";
import truncateEthAddress from "truncate-eth-address";
import { connectAccount } from "../../functions/connectAccount";
import { Button } from "@mantine/core";
import { useCollectionModal } from "../MyCollection";

interface menuItem {
  label: string;
  path: string;
}

const itemList: menuItem[] = [
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Collection",
    path: "#collection",
  },
  {
    label: "Red Rose Clan",
    path: "#redRoseClan",
  },
  {
    label: "Team",
    path: "#team",
  },
  {
    label: "FAQ",
    path: "#faq",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];
declare const window: any;

export function Menu() {
  const { isShowingMint, isShowingCollection } = useState(store);
  const { toggle } = useMintModal();
  const { toggleCollection } = useCollectionModal();
  const { account, connected, wrongChain } = useWeb3();

  const MenuItems = ({ list, className }: { list: menuItem[], className: string }) => {
    return (
      <div className={className}>
        {list.map((item) => (
          <a
            href={item.path}
            className={styles.item}
            key={`menu-item-${item.path}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
          <MenuItems className={styles.menuItemsDesktop} list={itemList} />
          <MenuItems className={styles.menuItemsMobile} list={itemList.slice(0, 3)} />
          <MenuItems className={styles.menuItemsMobile} list={itemList.slice(3,7)} />
      </div>
      <div className={styles.walletConnector}>
        {/* BUTTONS DISABLED UNTIL END OF JULY 
        <MintButton  title="Mint" customClass={styles.button} open={toggle} /> 
         <Button className={`${styles.button}  ${window.ethereum?.selectedAddress  ? styles.connected : ''}`} 
                onClick={() => connectAccount()} >{window.ethereum?.selectedAddress ? truncateEthAddress(window.ethereum?.selectedAddress) : 'Wallet'}</Button> 
         <MintButton title="Collection" customClass={styles.button} open={toggleCollection} /> 
      */}
        <a
          className={styles.button}
          target='_blank'
          href="https://storage.googleapis.com/beardedbuddies/LITE_PAPER_2022_DICIEMBRE.pdf"
          rel="noopener noreferrer"
        >
          Litepaper
        </a>
        
        {/* <a className={styles.iconContainer} href='#'>
                <img className={styles.icon} src={openSean} alt="open-sea" />
            </a> */}
      </div>
    </div>
  );
}

export default React.memo(Menu);
