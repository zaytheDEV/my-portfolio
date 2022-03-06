import React, { useEffect, useLayoutEffect } from "react";
import styles from "./pageHeader.module.css";
import { motion, useAnimation } from "framer-motion";
import TitleDot from "../TitleDot/TitleDot";
import { useDispatch } from "react-redux";
import { setPageStatus } from "../../features/titleDotSlice";

function PageHeader(props) {
  const dispatch = useDispatch();
  const titlesAni = useAnimation();
  const descriptionAni = useAnimation();
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  const container = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const titleVariants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
    descHidden: {
      y: 10,
      opacity: 0,
    },
    descVisible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: .8, ...transition },
    },
  };
  useLayoutEffect(() => {
    dispatch(setPageStatus(false));
  }, [dispatch]);
  useEffect(() => {
    titlesAni.start("visible");
    const pageSequence = async () => {
      await descriptionAni.start("descVisible");
      return await dispatch(setPageStatus(true));
    };
    pageSequence();
  }, [dispatch, descriptionAni, titlesAni]);
  return (
    <section className={styles["intro"]}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={titlesAni}
        className={styles["intro-title"]}
      >
        {props.titles.map((title) => (
          <div key={title} className={styles["intro-title-holder"]}>
            <motion.span
              variants={titleVariants}
              className={styles["main-title-text"]}
            >
              {title}
            </motion.span>
          </div>
        ))}
        <TitleDot bgColor={props.bgColor} />
      </motion.div>
      <motion.span
        variants={titleVariants}
        initial="descHidden"
        animate={descriptionAni}
        className={styles["header-description"]}
      >
        {props.description}
      </motion.span>
    </section>
  );
}

export default React.memo(PageHeader);
