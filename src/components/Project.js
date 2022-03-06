import styles from "../styles/project.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { setCursor, resetCursor } from "../features/cursorSlice";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Project(props) {
  const dispatch = useDispatch();
  const mouseHoverHandler = (color) => {
    dispatch(setCursor({ color: color, title: "view project" }));
  };
  const mouseLeaveHandler = () => {
    dispatch(resetCursor());
  };
  //on scroll animations
  const projectAni = useAnimation();
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
      projectAni.start("visible");
    }
  }, [inView, projectAni]);
  return (
    <motion.div
      className={styles.project}
      ref={ref}
      animate={projectAni}
      variants={variants}
      initial="hidden"
      onMouseEnter={() => mouseHoverHandler(props.hoverColor)}
      onMouseLeave={() => mouseLeaveHandler()}
    >
      <div
        className={styles.project_img}
        style={{ backgroundColor: props.coverColor }}
      >
        <LazyLoadImage
          src={props.projectImage}
          alt="project"
          className={props.small ? styles.img__sm : styles.img__lg}
        />
      </div>
      <div className={styles.project_title}>
        <h1>{props.boldTitle}</h1>
        <p>{props.description}</p>
      </div>
    </motion.div>
  );
}

export default React.memo(Project);
