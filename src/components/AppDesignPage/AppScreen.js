import React, { useEffect } from "react";
import styles from "../AppDesignPage/appScreen.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
function AppScreen(props) {
  //on scroll animations
  const screenAni = useAnimation();
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    hidden: {
      y: 30,
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: transition,
    },
  };
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      screenAni.start("visible");
    }
  }, [inView, screenAni]);
  return (
    <motion.div 
    ref={ref}
    className={styles["col-item"]}
    animate={screenAni}
    variants={variants}
    initial='hidden'
    >
      <div className={styles["col-item__screen"]}>
        <div className={styles["screen__img"]}>
          <img
            src={process.env.PUBLIC_URL + `/images/mockups/${props.screenImg}`}
            alt="appScreen"
          />
        </div>
        <div
          className={styles.screen__backdrop}
          style={{ backgroundColor: props.bgColor }}
        ></div>
      </div>
      <div className={styles.screen__title} style={{ color: props.fontColor }}>
        {props.screenTitle}
      </div>
    </motion.div>
  );
}

export default AppScreen;
