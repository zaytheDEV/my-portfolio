import React, { useEffect } from "react";
import styles from "./projectDetails.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import LinkButton from "../LinkButton/LinkButton";
function ProjectDetails(props) {
  const projcetDetailAni = useAnimation();
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
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
      projcetDetailAni.start("visible");
    }
  }, [inView, projcetDetailAni]);
  return (
    <motion.section
      ref={ref}
      variants={variants}
      animate={projcetDetailAni}
      initial="hidden"
      className={styles["project-details"]}
    >
        <h1
          className={styles["project-details__title"]}
          style={{ color: props.textColor }}
        >
          {props.title}
        </h1>
        <div className={styles["project-details__description"]}>
          <div>
            {props.paragraphTitle && (
              <h1 style={{ color: props.textColor }}>{props.paragraphTitle}</h1>
            )}
            <p style={{ color: props.textColor }}>{props.projDesc}</p>
          </div>
          {props.paragraph2 && (
            <div>
              <h1 style={{ color: props.textColor }}>
                {props.paragraphTitle2}
              </h1>
              <p style={{ color: props.textColor }}>{props.projDesc2}</p>
            </div>
          )}
          {props.button && (
            <LinkButton
              title={props.linkTitle}
              link={props.link}
              linkType={props.linkType}
              color={props.textColor}
            />
          )}
        </div>
    </motion.section>
  );
}

export default React.memo(ProjectDetails);
