import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import styles from "./customCursor.module.css";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

function CustomCursor() {
  //url Change Handler
  const location = useLocation();
  const cursorAni = useAnimation();

  useEffect(() => {
    cursorAni.start("fadeCursor");
  }, [cursorAni, location.pathname]);
  //Redux Cursor Selector
  const cursorColor = useSelector((state) => state.cursor.cursorColor);
  const cursorSizeState = useSelector((state) => state.cursor.cursorLarge);
  const cursorTitle = useSelector((state) => state.cursor.cursorTitle);
  const titleDot = useSelector((state) => state.dot.dot);
  const pageStatus = useSelector((state) => state.dot.pageReady);
  const cursorPictureState = useSelector(
    (state) => state.cursor.projectCursorState
  );
  const cursorPicture = useSelector(
    (state) => state.cursor.projectCursorPicture
  );
  let transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const titleAni = useAnimation();
  const [linkHovered, setLinkHovered] = useState(false);
  const [projectLinkHovered, setProjectLinkHovered] = useState(false);
  const cursorVariants = {
    cursorLoad: {
      width: titleDot.w,
      height: titleDot.h,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    cursorSet: {
      width: "11px",
      height: "11px",
      opacity: 0,
    },
    shrink: {
      width: "11px",
      height: "11px",
      transition: transition,
    },
    grow: {
      width: "80px",
      height: "80px",
      transition: transition,
    },
    titleHidden: {
      scale: 0,
      transition: transition,
    },
    titleVisible: {
      scale: 1,
      transition: transition,
    },
    cursorXL: {
      width: "240px",
      height: "240px",
      transition: transition,
    },
    fadeCursor: {
      width: 0,
      height: 0,
      transition: transition,
    },
  };
  //Cursor
  const dot = useRef(null);
  const delay = 10;
  let endX = useRef(titleDot.xPos);
  let endY = useRef(titleDot.yPos);
  const _x = useRef(titleDot.xPos);
  const _y = useRef(titleDot.yPos);
  const requestRef = useRef(null);
  const mouseMoveEvent = (e) => {
    endX.current = e.clientX;
    endY.current = e.clientY;
  };
  const cursorReset = useCallback(() => {
    endX.current = titleDot.xPos;
    endY.current = titleDot.yPos;
    _x.current = titleDot.xPos;
    _y.current = titleDot.yPos;
  }, [titleDot.xPos, titleDot.yPos]);
  const outerCircleAnimation = useCallback(() => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dot.current.style.top = _y.current + "px";
    dot.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(outerCircleAnimation);
  }, []);
  useEffect(() => {
    if (pageStatus) {
      cursorAni.start("shrink");
      document.addEventListener("mousemove", mouseMoveEvent);
      outerCircleAnimation();
      return () => {
        document.removeEventListener("mousemove", mouseMoveEvent);

        cancelAnimationFrame(requestRef.current);
      };
    } else {
      cursorReset();
      cursorAni.start("cursorLoad");
      dot.current.style.left = titleDot.xPos + "px";
      dot.current.style.top = titleDot.yPos + "px";
    }
  }, [
    outerCircleAnimation,
    pageStatus,
    cursorAni,
    titleDot.xPos,
    titleDot.yPos,
    cursorReset,
  ]);
  useEffect(() => {
    if (pageStatus) {
      if (cursorSizeState) {
        setLinkHovered(true);
        cursorAni.start("grow");
        titleAni.start("titleVisible");
      } else if (!cursorSizeState && linkHovered) {
        setLinkHovered(false);
        cursorAni.start("shrink");
        titleAni.start("titleHidden");
      } else if (cursorPictureState) {
        setProjectLinkHovered(true);
        cursorAni.start("cursorXL");
      } else if (!cursorPictureState && projectLinkHovered) {
        setProjectLinkHovered(false);
        cursorAni.start("shrink");
      }
    }
  }, [
    cursorSizeState,
    cursorPictureState,
    cursorAni,
    linkHovered,
    projectLinkHovered,
    titleAni,
    pageStatus
  ]);
  return (
    <motion.div
      className={styles["cursor"]}
      exit={{ opacity: 0, transition: transition }}
    >
      <motion.div
        ref={dot}
        variants={cursorVariants}
        initial="cursorSet"
        animate={cursorAni}
        className={`${styles["cursor--dot"]} ${
          cursorSizeState ? styles["cursor--blend"] : ""
        }`}
        style={{ backgroundColor: `rgba(${cursorColor})` }}
      >
        <motion.span
          variants={cursorVariants}
          initial="titleHidden"
          animate={titleAni}
        >
          {cursorTitle}
        </motion.span>
        <img
          src={cursorPicture}
          style={{ display: cursorPictureState ? "block" : "none" }}
          alt="next-project"
        />
      </motion.div>
    </motion.div>
  );
}

export default CustomCursor;
