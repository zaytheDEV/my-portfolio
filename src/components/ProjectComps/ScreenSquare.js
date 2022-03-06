import React, { useState } from "react";
import styles from "./screenSquare.module.css";
function ScreenSquare(props) {
  const [screenVideo, setScreenVideo] = useState(
    `../Videos/${props.video}.mp4`
  );
  return (
    <div className={styles["screen-square"]}>
      {props.videoScreen && (
        <div
          className={`${styles["screen-square__video"]} ${
            props.desktop ? styles["screen-square__video--desktop"] : ""
          }`}
        >
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={screenVideo} type="video/mp4" />
          </video>
        </div>
      )}
      {props.imageScreen && (
          <div className={styles["screen-square__img"]}>
              <img src={
              process.env.PUBLIC_URL + `/images/femmes/${props.image}.jpg`
            } alt="favorites-screen"/>
          </div>
      )}
      <div className={styles["screen-square__description"]}>
        <span>{props.title}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ScreenSquare;
