import React from "react";
import styles from "./screenColumns.module.css";
function ScreenColumns(props) {
  return <div className={styles["screen-col"]}>{props.children}</div>;
}

export default ScreenColumns;
