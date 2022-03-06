import React, { useCallback, useEffect, useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import InView from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeAppColor } from "../../features/colorSlice";
import { setNavColor, hideNavItem } from "../../features/navSlice";
import { setCursor, resetCursor } from "../../features/cursorSlice";
import { isChrome, isMobile } from "react-device-detect";
function Footer() {
  //chrome user detection
  const [chromeStyle, setChromeStyle] = useState(false);
  const chromeHandler = useCallback(() => {
    if (isChrome && isMobile) {
      setChromeStyle(true);
    }
  }, []);
  useEffect(() => {
    chromeHandler();
  }, [chromeHandler]);
  //cursor actions
  const dispatch = useDispatch();
  const mouseHoverHandler = useCallback(
    (color) => {
      dispatch(setCursor({ color: color, title: "hi:)" }));
    },
    [dispatch]
  );
  const mouseLeaveHandler = () => {
    dispatch(resetCursor());
  };
  //background color update
  const [elementViewed, setElementViewed] = useState(false);
  const titleAni = useAnimation();
  const transition = { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: {
      y: "100%",
      skew: "-20deg",
      transition: transition,
    },
    visible: {
      y: 0,
      skew: 0,
      transition: transition,
    },
  };
  const inViewHandler = useCallback(
    (inView) => {
      if (inView) {
        titleAni.start("visible");
        dispatch(changeAppColor(`#151515`));
        dispatch(hideNavItem());
        setElementViewed(true);
        dispatch(setNavColor("#fff"));
      } else if (!inView && elementViewed) {
        titleAni.start("hidden");
        dispatch(changeAppColor(`#fff`));
        dispatch(setNavColor("#151515"));
        dispatch(hideNavItem());
        setElementViewed(false);
        return;
      }
    },
    [titleAni, dispatch, elementViewed]
  );

  //Mailto function
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a style={{ textDecoration: "none" }} href={`mailto:${email}${params}`}>
        {children}
      </a>
    );
  };
  return (
    <InView
      as="section"
      threshold={0.3}
      onChange={(inView) => inViewHandler(inView)}
      className={styles.footer}
    >
      <div className={styles["footer__message"]}>
        <div className={styles["h1-holder"]}>
          <motion.span
            variants={variants}
            animate={titleAni}
            initial="hidden"
            className={styles["message__h1"]}
          >
            let's
          </motion.span>
        </div>
        <div className={`${styles["h1-holder"]} ${styles["h1-block"]}`}>
          <motion.span
            variants={variants}
            animate={titleAni}
            initial="hidden"
            className={`${styles["message__h1"]} ${styles["message__h1--italic"]}`}
          >
            design &
          </motion.span>
        </div>
        <div className={`${styles["h1-holder"]} ${styles["h1-block"]}`}>
          <motion.span
            variants={variants}
            animate={titleAni}
            initial="hidden"
            className={`${styles["message__h1"]} ${styles["message__h1--italic"]}`}
          >
            develop
          </motion.span>
        </div>
        <div className={`${styles["h1-holder"]} ${styles["h1-block"]}`}>
          <motion.span
            variants={variants}
            animate={titleAni}
            initial="hidden"
            className={styles["message__h1"]}
          >
            your next
          </motion.span>
        </div>
        <div className={`${styles["h1-holder"]} ${styles["h1-block"]}`}>
          <motion.span
            variants={variants}
            animate={titleAni}
            initial="hidden"
            className={styles["message__h1"]}
          >
            project
          </motion.span>
        </div>
      </div>
      <div className={styles["footer__contact-detail"]}>
        <p>
          if you would like to work with me or if you have questions just
          message me on instagram, LinkedIn, or email me.
        </p>
      </div>
      <div
        onMouseEnter={() => mouseHoverHandler("245, 82, 82")}
        onMouseLeave={() => mouseLeaveHandler()}
        className={styles["footer-email"]}
      >
        <span className={styles["footer-email__title"]}>email me</span>
        <Mailto email="hi@zaythedev.com" subject="Hello, Isaiah" body="">
          <span className={styles["footer-email__link"]}>
            hi@zaythedev<b style={{ color: "#F73131" }}>.</b>com
          </span>
        </Mailto>
      </div>
      <div className={styles.footer__social}>
        <Link
          to={{ pathname: "https://github.com/zaytheDEV" }}
          target="_blank"
          className={styles["footer-social__link"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 141.222 137.693"
          >
            <path
              id="Icon_awesome-github"
              data-name="Icon awesome-github"
              d="M47.235,111.433c0,.569-.655,1.025-1.481,1.025-.94.085-1.594-.37-1.594-1.025,0-.569.655-1.025,1.481-1.025C46.5,110.323,47.235,110.778,47.235,111.433Zm-8.855-1.281c-.2.569.37,1.224,1.224,1.4a1.336,1.336,0,0,0,1.765-.569c.171-.569-.37-1.224-1.224-1.481A1.461,1.461,0,0,0,38.381,110.152Zm12.585-.484c-.826.2-1.4.74-1.31,1.4.085.569.826.94,1.68.74.826-.2,1.4-.74,1.31-1.31C52.56,109.953,51.791,109.583,50.965,109.668ZM69.7.562C30.209.562,0,30.544,0,70.035c0,31.576,19.874,58.6,48.26,68.105,3.644.655,4.926-1.594,4.926-3.445,0-1.765-.085-11.5-.085-17.482,0,0-19.931,4.271-24.116-8.485,0,0-3.246-8.285-7.915-10.421,0,0-6.52-4.47.456-4.385a15.029,15.029,0,0,1,10.99,7.346c6.235,10.99,16.685,7.83,20.756,5.951a15.825,15.825,0,0,1,4.556-9.6c-15.916-1.765-31.974-4.072-31.974-31.462,0-7.83,2.164-11.759,6.719-16.77-.74-1.851-3.16-9.481.74-19.333,5.951-1.851,19.646,7.687,19.646,7.687a67.263,67.263,0,0,1,35.761,0s13.7-9.567,19.646-7.687c3.9,9.88,1.481,17.482.74,19.333,4.556,5.04,7.346,8.969,7.346,16.77,0,27.476-16.77,29.668-32.686,31.462,2.619,2.249,4.84,6.52,4.84,13.211,0,9.6-.085,21.468-.085,23.8,0,1.851,1.31,4.1,4.926,3.445,28.472-9.453,47.776-36.473,47.776-68.049C141.222,30.544,109.191.562,69.7.562Zm-42.025,98.2c-.37.285-.285.94.2,1.481.456.456,1.11.655,1.481.285.37-.285.285-.94-.2-1.481C28.7,98.592,28.045,98.393,27.675,98.763ZM24.6,96.457c-.2.37.085.826.655,1.11a.847.847,0,0,0,1.224-.2c.2-.37-.085-.826-.655-1.11C25.255,96.087,24.8,96.172,24.6,96.457Zm9.225,10.136c-.456.37-.285,1.224.37,1.765.655.655,1.481.74,1.851.285.37-.37.2-1.224-.37-1.765C35.049,106.223,34.2,106.137,33.825,106.593Zm-3.246-4.185c-.456.285-.456,1.025,0,1.68s1.224.94,1.594.655a1.3,1.3,0,0,0,0-1.765C31.775,102.322,31.035,102.037,30.579,102.408Z"
              transform="translate(0 -0.563)"
              fill="#fff"
            />
          </svg>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/zaythedev/" }}
          target="_blank"
          className={styles["footer-social__link"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 22.889 22.889"
          >
            <path
              id="Icon_awesome-linkedin"
              data-name="Icon awesome-linkedin"
              d="M21.254,2.25H1.63A1.642,1.642,0,0,0,0,3.9V23.488a1.642,1.642,0,0,0,1.63,1.65H21.254a1.646,1.646,0,0,0,1.635-1.65V3.9A1.646,1.646,0,0,0,21.254,2.25ZM6.918,21.869H3.525V10.946h3.4V21.869ZM5.221,9.454A1.967,1.967,0,1,1,7.188,7.487,1.968,1.968,0,0,1,5.221,9.454ZM19.634,21.869H16.242V16.555c0-1.267-.026-2.9-1.763-2.9-1.768,0-2.039,1.379-2.039,2.8v5.405H9.048V10.946H12.3v1.492h.046a3.573,3.573,0,0,1,3.214-1.763c3.433,0,4.072,2.263,4.072,5.206Z"
              transform="translate(0 -2.25)"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>
      <div
        className={`${styles.footer__info} ${
          chromeStyle ? styles["footer-detail--chrome"] : ""
        }`}
      >
        <span>Los Angeles, CA</span>
      </div>
      <div
        className={`${styles.footer__myName} ${
          chromeStyle ? styles["footer-detail--chrome"] : ""
        }`}
      >
        <span>
          ZAYTHEDEV<b style={{ color: "#f55252" }}>.</b>
        </span>
      </div>
    </InView>
  );
}

export default React.memo(Footer);
