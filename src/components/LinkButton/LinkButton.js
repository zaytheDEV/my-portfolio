import React, { useCallback } from "react";
import styles from "./linkButton.module.css";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { motion, useAnimation } from "framer-motion";

function LinkButton(props) {
  const history = useHistory();

  //Hover Animation
  const coverAni = useAnimation();
  const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

  //URL handler
  const linkHandler = (linkType) => {
    if (linkType === "external") {
      window.open(`${props.link}`, "_blank");
    } else {
      history.push(props.link);
    }
  };

  const onHoverHandler = useCallback(() => {
    coverAni.start("visible");
  }, [coverAni]);
  const onMouseLeaveHandler = useCallback(() => {
    coverAni.start("hidden");
  }, [coverAni]);
  const variants = {
    hidden: {
      y: "100%",
      transition: transition,
    },
    visible: {
      y: 0,
      transition: transition,
    },
  };
  return (
    <>
      {isMobile ? (
        <div
          onClick={() => linkHandler(props.linkType)}
          className={styles["link-button"]}
          style={{ borderColor: props.color }}
        >
          <span
            className={styles["link-button__title"]}
            style={{ color: props.color }}
          >
            {props.title}
          </span>
        </div>
      ) : (
        <div
          className={styles["link-button"]}
          onMouseEnter={() => onHoverHandler()}
          onMouseLeave={() => onMouseLeaveHandler()}
          onClick={() => linkHandler(props.linkType)}
          style={{ borderColor: props.color }}
        >
          <span
            className={styles["link-button__title"]}
            style={{ color: props.color }}
          >
            {props.title}
          </span>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={coverAni}
            className={styles["link-button__cover"]}
          ></motion.div>
        </div>
      )}
    </>
  );
}

export default React.memo(LinkButton);
