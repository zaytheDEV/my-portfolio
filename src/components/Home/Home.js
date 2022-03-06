import styles from "./home.module.css";
import Project from "../Project";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useLayoutEffect } from "react";
import Footer from "../pageComps/Footer";
import { InView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import BoldDescription from "../BoldDescription/BoldDescription";
import LinkButton from "../LinkButton/LinkButton";
import PageHeader from "../PageHeader/PageHeader";
import SectionTitle from "../SectionTitle/SectionTitle";
import { resetCursor } from "../../features/cursorSlice";
import femmesLogo from "../../Images/femmes.png";
import netflixLogo from "../../Images/netflix_PNG10.png";
import uberLogo from "../../Images/Uber_clone/logo.svg";
import amazonLogo from "../../Images/amazon_PNG25.png";

function Home() {
  //page setup Handler
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  //Mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);
  //Cursor Animations
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  //----landing page animations
  const introPhotoAni = useAnimation();
  const introCoverAni = useAnimation();
  const introVariants = {
    titleHidden: {
      y: "100%",
    },
    titleVisible: {
      y: 0,
    },
    locationHidden: {
      y: 30,
      opacity: 0,
    },
    locationVisible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.7, duration: 1.5, ...transition },
    },
    photoHidden: {
      scale: 1.2,
    },
    photoVisible: {
      scale: 1,
      transition: { duration: 1.6, ...transition },
    },
    coverInt: {
      width: "100%",
    },
    coverRemove: {
      width: 0,
      transition: { duration: 1.5, ...transition },
    },
  };
  const introPhotoHandler = useCallback(
    (inView) => {
      if (inView) {
        introPhotoAni.start("photoVisible");
        introCoverAni.start("coverRemove");
      }
      return;
    },
    [introCoverAni, introPhotoAni]
  );
  //Photo device constants
  const mobileHeader = require("../../Images/mobile-home.jpg").default;
  const desktopHeader = require("../../Images/home.jpg").default;
  //--------------------onScroll Animations
  const elementAni = useAnimation();
  const inViewVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ...transition },
    },
    bannerInitial: {
      x: 0,
    },
    bannerRemove: {
      x: "-100%",
      transition: { duration: 1.5, ...transition },
    },
    uiHidden: {
      opacity: 0,
      scale: 1.2,
    },
    uiVisible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ...transition },
    },
  };
  //In View animation Handler
  const inViewHandler = useCallback(
    (inView, section) => {
      if (inView && section === "short__description") {
        elementAni.start("visible");
      } else if (inView && section === "ui-banner") {
        elementAni.start("uiVisible");
      }
    },
    [elementAni]
  );
  return (
    <motion.div
    className={styles["home"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["zay the", "developer"]}
        description="//&#127796; based in Los Angeles"
      />
      <InView
        as="div"
        threshold={0.4}
        className={styles["intro-photo"]}
        onChange={(inView) => introPhotoHandler(inView)}
        triggerOnce={true}
      >
        <div className={styles["photo"]}>
          <motion.img
            variants={introVariants}
            initial="photoHidden"
            animate={introPhotoAni}
            src={isMobileUser ? mobileHeader : desktopHeader}
            alt="header"
          />
          <motion.div
            variants={introVariants}
            animate={introCoverAni}
            initial="coverInt"
            className={styles["photo-cover"]}
          ></motion.div>
        </div>
      </InView>
      <InView
        className={styles["landing-description"]}
        threshold={0.4}
        id="short__description"
        as="section"
        onChange={(inView, entry) => inViewHandler(inView, entry.target.id)}
      >
        <SectionTitle title="//about me" />
        <motion.div
          animate={elementAni}
          variants={inViewVariants}
          initial="hidden"
        >
          <motion.p className={styles["description-text"]}>
            Hi, my name is <b>Isaiah Gore</b> and I am your next Front-End developer.
            I strive to develop efficient and creative web applications
            <b style={{ color: "#f55252" }}>!</b>
          </motion.p>
          <LinkButton title="about me" link="/about" linkType="" />
        </motion.div>
      </InView>
      <section className={styles["projects"]}>
        <SectionTitle title="//my work" />
        <div className={styles["projects-header"]}>
          <BoldDescription titles={["my", "recent", "projects"]} />
          <LinkButton title="all projects" link="/work" linkType="" />
        </div>
        <div className={styles["projects__list"]}>
          <div className={styles["projects-columns"]}>
            <div className={styles["projects-columns__column"]}>
              <Link
                to="/femmes"
                style={{ textDecoration: "none" }}
                className={styles["projects-columns__column__project"]}
              >
                <Project
                  coverColor="#FEC5BB"
                  projectImage={femmesLogo}
                  boldTitle="Femmes E-Commerce"
                  description="Developed a full stack e-commerce clothing website with React, Redux, and Firebase"
                  hoverColor="216, 226, 220, 0.8"
                  small
                />
              </Link>
              <Link
                to="/netflix-clone"
                style={{ textDecoration: "none" }}
                className={styles["projects-columns__column__project"]}
              >
                <>
                  <Project
                    coverColor="#363636"
                    projectImage={netflixLogo}
                    boldTitle="Netflix Clone"
                    description="Developed a replica of Netflix front-end design & user authentication"
                    hoverColor="179, 0, 0, 0.8"
                  />
                </>
              </Link>
            </div>
            <div
              className={`${styles["projects-columns__column"]} ${styles["projects-columns__column--right"]}`}
            >
              <Link
                to="/uber-clone"
                style={{ textDecoration: "none" }}
                className={styles["projects-columns__column__project"]}
              >
                <>
                  <Project
                    coverColor="#000000"
                    projectImage={uberLogo}
                    boldTitle="Uber Clone"
                    description="Developed an app clone of Uber's rider functionality with React native"
                    hoverColor="245, 82, 82, 0.8"
                  />
                </>
              </Link>
              <Link
                to="/amazon-clone"
                style={{ textDecoration: "none", marginBottom: 0 }}
                className={styles["projects-columns__column__project"]}
              >
                <>
                  <Project
                    coverColor="#011D39"
                    projectImage={amazonLogo}
                    boldTitle="Amazon Clone"
                    description="Developed a replica of Amazon front-end & user authentication with React"
                    hoverColor="252, 175, 23, .8"
                  />
                </>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Home;
