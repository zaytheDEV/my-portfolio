import React, { useCallback } from "react";
import appPageStyles from "../ProjectComps/sectionTitle.module.css";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function HeaderMain(props) {
  const titleAni = useAnimation();
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const titleVariants = {
    visible: {
      y: 0,
      skew: 0,
      transition: transition,
    },
    hidden: {
      y: "100%",
      skew: "-45deg",
    },
  };

  const inViewHandler = useCallback(
    (inView) => {
      if (inView) {
        titleAni.start("visible");
      }
      return;
    },
    [titleAni]
  );
  return (
    <InView
      className={`${appPageStyles["title-holder"]} ${
        appPageStyles[props.secondTitle ? "title--second" : ""]
      }`}
      onChange={(inView) => inViewHandler(inView)}
      threshold={0.5}
      triggerOnce={true}
    >
      <motion.h1
        style={{ textAlign: props.center ? "center" : "left" }}
        animate={titleAni}
        variants={titleVariants}
        initial="hidden"
      >
        {props.title}
      </motion.h1>
    </InView>
  );
}

export default HeaderMain;
