import { Button } from "@mantine/core";
import React from "react";
import styles from "./index.module.scss"

export default function MintButton({open, customClass, title, disabled=false}: any) {
  return (
      <Button className={`${styles.mintButton} ${customClass} ${disabled ? styles.disabled: ""}`} onClick={open}>{title}</Button>
  );
}
