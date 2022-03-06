import styles from "./navigation.module.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { setCursor, shrinkCursor } from "../../features/cursorSlice";
function Navigation() {
  const dispatch = useDispatch();

  //Link Hover Handler
  const hoverHandler = useCallback(
    (type) => {
      if (type === "hover") {
        dispatch(setCursor(""));
      } else if (type === "leave") {
        dispatch(shrinkCursor());
      }
    },
    [dispatch]
  );
  const linkColor = useSelector((state) => state.navMenu.color);
  const hideLink = useSelector((state) => state.navMenu.hideItem);
  let history = useHistory();
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
    <div className={styles.navigation}>
      <div
        className={`${styles.nav__work} ${styles.nav__icon}`}
        onClick={() => history.push("/work")}
        onMouseEnter={() => hoverHandler("hover")}
        onMouseLeave={() => hoverHandler("leave")}
      >
        <span style={{ color: `${linkColor}` }}>work</span>
      </div>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        onMouseEnter={() => hoverHandler("hover")}
        onMouseLeave={() => hoverHandler("leave")}
      >
        <div className={styles.nav__title}>
          <span style={{ color: `${linkColor}` }}>
            ZAY<b style={{ color: "#f55252" }}>.</b>
          </span>
        </div>
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: "none" }}
        onMouseEnter={() => hoverHandler("hover")}
        onMouseLeave={() => hoverHandler("leave")}
      >
        <div className={`${styles.nav__about} ${styles.nav__icon}`}>
          <span
            className={styles.nav__aboutTitle}
            style={{ color: `${linkColor}` }}
          >
            about me
          </span>
        </div>
      </Link>
      <Mailto email="hi@zaythedev.com" subject="Hello, Isaiah" body="">
        <div
          className={styles.nav__contactCircle}
          style={{ display: hideLink ? "none" : "" }}
        >
          <div className={styles.nav__contactSVG}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 28.633 22.497"
            >
              <path
                id="Icon_ionic-md-mail"
                data-name="Icon ionic-md-mail"
                d="M28.156,5.625H4.977A2.735,2.735,0,0,0,2.25,8.352V25.4a2.735,2.735,0,0,0,2.727,2.727H28.156A2.735,2.735,0,0,0,30.883,25.4V8.352A2.735,2.735,0,0,0,28.156,5.625Zm-.341,5.795-11.249,7.5L5.318,11.42V8.693l11.249,7.5,11.249-7.5Z"
                transform="translate(-2.25 -5.625)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </Mailto>
      <div
        className={styles.navigation__social}
        style={{ display: hideLink ? "none" : "" }}
      >
        <Link to={{ pathname: "https://github.com/zaytheDEV" }} target="_blank">
          <div className={styles.navigation__link}>
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
                fill={linkColor}
              />
            </svg>
          </div>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/zaythedev/" }}
          target="_blank"
        >
          <div className={styles.navigation__link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 27.271 27.271"
            >
              <path
                id="Icon_awesome-linkedin"
                data-name="Icon awesome-linkedin"
                d="M25.323,2.25H1.942A1.956,1.956,0,0,0,0,4.216V27.555a1.956,1.956,0,0,0,1.942,1.966H25.323a1.961,1.961,0,0,0,1.948-1.966V4.216A1.961,1.961,0,0,0,25.323,2.25ZM8.242,25.625H4.2V12.61H8.248V25.625ZM6.221,10.833A2.344,2.344,0,1,1,8.565,8.489,2.345,2.345,0,0,1,6.221,10.833ZM23.393,25.625H19.351V19.294c0-1.51-.03-3.451-2.1-3.451-2.106,0-2.429,1.644-2.429,3.342v6.44H10.78V12.61h3.878v1.777h.055a4.257,4.257,0,0,1,3.829-2.1c4.091,0,4.852,2.7,4.852,6.2Z"
                transform="translate(0 -2.25)"
                fill={linkColor}
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Navigation);
