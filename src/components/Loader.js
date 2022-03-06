import styles from "../styles/loader.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Loader({ setLoading }) {
  const cover = useAnimation();
  const titleCover = useAnimation();
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

  const titleAnimation = {
    mainVisible: {
      opacity: 1,
    },
    mainHidden: {
      opacity: 0,
      transition: { duration: 1, delay: 1, ...transition },
    },
    coverHidden: {
      y: "100%",
    },
    coverVisible: {
      y: 0,
      transition: { delay: 0.5, duration: .8, ...transition },
    },
  };
  useEffect(() => {
    titleCover.start("coverVisible");
    cover.start("mainHidden");
  }, [cover, titleCover]);

  return (
    <motion.div
      variants={titleAnimation}
      animate={cover}
      initial="mainVisible"
      className={styles.loader}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className={styles.loader__SVG}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 523.925 66.91"
        >
          <g
            id="Group_247"
            data-name="Group 247"
            transform="translate(-699.075 -507.09)"
          >
            <path
              id="Path_213"
              data-name="Path 213"
              d="M-254.925-10.8l28.62-38.7h-27.9V-62.91h47.79v10.89l-28.44,38.61h30.42V0h-50.49Zm76.14-52.11h15.66L-138.015,0H-154.3l-5.04-12.96h-23.22L-187.6,0h-16.38ZM-163.3-25.2l-7.65-21.15-7.74,21.15Zm38.61,1.26-23.22-38.97h17.01l14.22,24.39,14.85-24.39h16.92l-23.85,38.97V0h-15.93Zm56.61-25.56h-17.73V-62.91h51.48V-49.5h-17.82V0h-15.93Zm36.9-13.41h15.93v24.3H9.405v-24.3h15.93V0H9.405V-25.38h-24.66V0h-15.93Zm62.82,0h44.64V-49.5H47.565v11.79h20.97V-25.2H47.565v11.79h28.71V0H31.635Zm49.14,0h22.59a40.771,40.771,0,0,1,18.09,3.78A27.539,27.539,0,0,1,133.38-48.285a31.8,31.8,0,0,1,4.185,16.515q0,15.66-9.18,23.715T102.915,0H80.775Zm23.49,49.5q8.19,0,12.555-4.95t4.365-13.41q0-7.74-4.365-12.735T104.805-49.5h-8.1v36.09Zm37.8-49.5h44.64V-49.5H158v11.79h20.97V-25.2H158v11.79h28.71V0h-44.64Zm46.89,0h17.01l16.02,41.85,16.02-41.85h16.92L229.815,0h-15.66Z"
              transform="translate(954 570)"
            />
            <circle
              id="Ellipse_20"
              data-name="Ellipse 20"
              cx="10"
              cy="10"
              r="10"
              transform="translate(1203 554)"
              fill="#f55252"
            />
          </g>
        </svg>

        <motion.div
          variants={titleAnimation}
          animate={titleCover}
          initial="coverHidden"
          className={styles["loader__cover"]}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Loader;
