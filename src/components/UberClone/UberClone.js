import React, { useEffect, useLayoutEffect } from "react";
import Footer from "../pageComps/Footer";
import styles from "./uberClone.module.css";
import { motion } from "framer-motion";
import ProjectDetails from "../ProjectComps/ProjectDetails";
import { resetCursor, setPageCursor } from "../../features/cursorSlice";
import { useDispatch, useSelector } from "react-redux";
import BoldDescription from "../BoldDescription/BoldDescription";
import NextProject from "../AppDesignPage/NextProject";
import SkillsList from "../SkillsList/SkillsList";
import PageHeader from "../PageHeader/PageHeader";
import SectionTitle from "../SectionTitle/SectionTitle";
import nextProjIMG from "../../Images/hover-cover3@2x.jpg";
import introVideo from "../../Videos/uber-clone.mp4";
import mobileIntroVideo from "../../Videos/mobile-uber-clone.mp4";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function UberClone() {
  const dispatch = useDispatch();
  //page setup handler
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  //mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);

  //device photo render
  const mobileScreen1 = require("../../Images/Uber_clone/screen1.png").default;
  const desktopScreen1 =
    require("../../Images/Uber_clone/screen1@2x.png").default;
  const mobileScreen2 = require("../../Images/Uber_clone/screen2.png").default;
  const desktopScreen2 =
    require("../../Images/Uber_clone/screen2@2x.png").default;
  const mobileScreen3 = require("../../Images/Uber_clone/screen3.png").default;
  const desktopScreen3 =
    require("../../Images/Uber_clone/screen3@2x.png").default;
  const mobileScreen4 = require("../../Images/Uber_clone/screen4.png").default;
  const desktopScreen4 =
    require("../../Images/Uber_clone/screen4@2x.png").default;
  const mobileFeature1 = require("../../Images/Uber_clone/feat-1.jpg").default;
  const desktopFeature1 =
    require("../../Images/Uber_clone/feat-1@2x.jpg").default;
  const mobileFeature2 = require("../../Images/Uber_clone/feat-2.jpg").default;
  const desktopFeature2 =
    require("../../Images/Uber_clone/feat-2@2x.jpg").default;

  //font color
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

  useEffect(() => {
    dispatch(setPageCursor("0, 0, 0"));
  }, [dispatch]);
  return (
    <motion.div
      className={styles["uber-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["uber", "clone"]}
        description="//&#128663; a clone of the mobile app Uber"
        scrollColor="#000"
        bgColor="#000"
      />
      <div className={styles["app-preview"]}>
        <video playsInline autoPlay muted loop>
          <source
            src={isMobileUser ? mobileIntroVideo : introVideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles["header-description__holder"]}>
        <ProjectDetails
          title="project details"
          projDesc="The Uber Clone was my first React Native project. The objective for this app was to demonstrate my ability for front-end app design and simulate the “Ride” feature in the Uber app. With many of the components in this app, I used Tailwind for the inline styling. If a component had many styling attributes, I used a separate style constant to avoid messy inline code. With the styling and advanced features in this clone, it looks and feels very similar to the actual Uber app."
        />
      </div>
      <section className={styles["app-screens"]}>
        <SectionTitle title="//app screens" title2="app design" />
        <BoldDescription
          titles={["styled", "with", "tailwind"]}
          textColor="#151515"
        />
        <LazyLoadComponent>
          <div className={styles["screens-container"]}>
            <div className={`${styles.column}`}>
              <div className={styles["screen-holder"]}>
                <img
                  src={isMobileUser ? mobileScreen1 : desktopScreen1}
                  alt="screen1"
                />
              </div>
              <div className={styles["screen-holder"]}>
                <img
                  src={isMobileUser ? mobileScreen2 : desktopScreen2}
                  alt="screen2"
                />
              </div>
            </div>
            <div className={`${styles.column} ${styles["column--right"]}`}>
              <div className={styles["screen-holder"]}>
                <img
                  src={isMobileUser ? mobileScreen3 : desktopScreen3}
                  alt="screen3"
                />
              </div>
              <div className={styles["screen-holder"]}>
                <img
                  src={isMobileUser ? mobileScreen4 : desktopScreen4}
                  alt="screen4"
                />
              </div>
            </div>
          </div>
        </LazyLoadComponent>
      </section>
      <div className={styles["challenges-container"]}>
        <ProjectDetails
          title="project challenges & solutions"
          button
          linkTitle="GitHub"
          linkType="external"
          link="https://github.com/zaytheDEV/uber-clone"
          projDesc="The challenging part for this project was styling the components. Using Tailwind made it easier, but their syntax and sizing properties are different from the standard CSS styles. So, throughout the entire project, I had to keep referring to Tailwind’s documentation to convert their sizing units to pixels.  After using tailwind for a couple of days, I eventually got used to their sizing properties. I am now able to style apps a lot faster with the help of Tailwind. "
        />
      </div>
      <section className={styles["project-features"]}>
        <SectionTitle title="//app features" />
        <BoldDescription titles={["app", "features"]} />
        <div className={styles["feature-container"]}>
          <LazyLoadComponent>
            <div className={styles["feature-row"]}>
              <div className={styles["feature"]}>
                <div className={styles["feature__img"]}>
                  <img
                    src={isMobileUser ? mobileFeature1 : desktopFeature1}
                    alt="feat_1"
                  />
                </div>
                <div className={styles["feature__description"]}>
                  <p>The start and end markers were created using Adobe XD.</p>
                </div>
              </div>
              <div className={styles["feature"]}>
                <div className={styles["feature__img"]}>
                  <img
                    src={isMobileUser ? mobileFeature2 : desktopFeature2}
                    alt="feat_2"
                  />
                </div>
                <div className={styles["feature__description"]}>
                  <p>
                    The app includes Google Places autocomplete API which
                    provides a drop-down menu with possible location predictions
                  </p>
                </div>
              </div>
            </div>
          </LazyLoadComponent>
        </div>
      </section>
      <section className={styles["project-tools"]}>
        <SectionTitle title="//project tools" />
        <BoldDescription titles={["tools for", "design &", "code"]} />
        <SkillsList
          skills={[
            "React Native",
            "redux",
            "Tailwind",
            "Google Places",
            "Google Maps",
            "Google Distance",
            "data structures",
            "javaScript",
            "expo",
            "adobe XD",
          ]}
        />
      </section>
      <NextProject projectImg={nextProjIMG} link="/netflix-clone" />
      <Footer />
    </motion.div>
  );
}

export default UberClone;
