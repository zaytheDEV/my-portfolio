import React, { useCallback } from "react";
import styles from "./boldDescription.module.css";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function BoldDescription(props) {
  let titles = props.titles;
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const titleAni = useAnimation();
  const container = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: transition,
    },
  };
  const paraVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: transition,
    },
  };
  const inViewHandler = useCallback((inView) => {
    if (inView) {
      titleAni.start("visible");
    }
  }, [titleAni]);
  return (
    <InView
      as="div"
      threshold={0.7}
      triggerOnce={true}
      onChange={(inView) => inViewHandler(inView)}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={titleAni}
        className={styles["bold-description"]}
      >
        {titles.map((title) => (
          <div 
          key={title}
          className={styles["description-text"]}>
            <motion.span
              variants={variants}
              style={{ color: `${props.textColor}` }}
            >
              {title}
            </motion.span>
          </div>
        ))}
        <motion.p variants={paraVariants}>{props.description}</motion.p>
      </motion.div>
    </InView>
  );
}

export default React.memo(BoldDescription);
