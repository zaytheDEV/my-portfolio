import React, { useEffect, useRef } from "react";
import styles from "./titleDot.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCoordinates } from "../../features/titleDotSlice";

function TitleDot(props) {
  const dispatch = useDispatch();
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    dotHidden: {
      scale: 0,
    },
    dotVisible: {
      scale: 1,
      transition: { duration: 0.5, ...transition },
    },
  };

  // dot coordinates handler
  const titleDot = useRef(null);
  useEffect(() => {
    if (!isMobileUser) {
      const dotCoord = titleDot.current.getBoundingClientRect();
      const dotWidth = titleDot.current.offsetWidth;
      const dotHeight = titleDot.current.offsetHeight;
      dispatch(
        setCoordinates({
          x: dotCoord.left,
          y: dotCoord.y,
          w: dotWidth,
          h: dotHeight,
        })
      );
    }
  }, [dispatch, isMobileUser]);
  return (
    <div
      className={styles["titleDot-main"]}
      style={{ opacity: isMobileUser ? 1 : 0 }}
    >
      <motion.div
        ref={titleDot}
        variants={variants}
        initial="dotHidden"
        animate="dotVisible"
        className={styles["intro-title__dot"]}
        style={{backgroundColor: props.bgColor}}
      ></motion.div>
    </div>
  );
}

export default React.memo(TitleDot);
