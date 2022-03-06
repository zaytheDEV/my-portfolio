import React from "react";
import styles from "./project.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCursor, resetCursor } from "../../features/cursorSlice";
import SectionTitle from "../SectionTitle/SectionTitle";

function Project(props) {
  //cursor functions
  const dispatch = useDispatch();
  const mouseHoverHandler = (color) => {
    dispatch(setCursor({ color: color, title: "view project" }));
  };
  const mouseLeaveHandler = () => {
    dispatch(resetCursor());
  };
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  const history = useHistory();
  const projectVariants = {
    projectTitleHidden: {
      y: "100%",
    },
    projectTitleVisible: {
      y: 0,
    },
    imageZoom: {
      scale: 1.5,
    },
    imageShrink: {
      scale: 1,
      transition: { duration: 1.5, ...transition },
    },
  };
  const updateURLHandler = () => {
    let projectUrl = props.url;
    history.push(projectUrl);
  };
  return (
    <InView threshold={0.5} triggerOnce={true}>
      {({ inView, ref }) => (
        <div ref={ref} className={styles["main-project"]}>
          <SectionTitle title={props.sectionTitle} title2={props.projectNumber} />
          <div
            className={styles["project-picture"]}
            onClick={updateURLHandler}
            onMouseEnter={() => mouseHoverHandler(props.hoverColor)}
            onMouseLeave={() => mouseLeaveHandler()}
          >
            <motion.img
              variants={projectVariants}
              initial="imageZoom"
              animate={inView && "imageShrink"}
              src={props.projectImg}
              alt=""
            />
          </div>
          <div className={styles["project-detials"]}>
            <div
              className={`${styles["detail-holder"]} ${
                props.uber && styles["detail--uber-holder"]
              }`}
            >
              <motion.span
                variants={projectVariants}
                initial="projectTitleHidden"
                animate={inView && "projectTitleVisible"}
                transition={{ duration: 1.5, ...transition }}
                className={`${styles["project-title"]} ${
                  props.uber && styles["detail--uber"]
                }`}
              >
                {props.projectTitle}
              </motion.span>
            </div>
            <div
              className={`${styles["detail-holder"]} ${
                props.moveUp && styles["project--marginTop"]
              }`}
            >
              <motion.span
                variants={projectVariants}
                initial="projectTitleHidden"
                animate={inView && "projectTitleVisible"}
                transition={{ delay: 0.3, duration: 1.5, ...transition }}
                className={styles["project-description"]}
              >
                {props.projectDescription}
              </motion.span>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default Project;
