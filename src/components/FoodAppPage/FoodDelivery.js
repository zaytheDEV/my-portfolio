import React, {
  useEffect,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import Footer from "../pageComps/Footer";
import styles from "./foodDelivery.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import ProjectDetails from "../ProjectComps/ProjectDetails";
import { changeAppColor } from "../../features/colorSlice";
import { resetCursor, setPageCursor } from "../../features/cursorSlice";
import { useDispatch, useSelector } from "react-redux";
import BoldDescription from "../BoldDescription/BoldDescription";
import NextProject from "../AppDesignPage/NextProject";
import SkillsList from "../SkillsList/SkillsList";
import PageHeader from "../PageHeader/PageHeader";
import SectionTitle from "../SectionTitle/SectionTitle";
import { resetNav, setNavColor } from "../../features/navSlice";
import introVideo from "../../Videos/food-app.mp4";
import mobileIntroVideo from "../../Videos/food-app-mobile.mp4";
import nextProjIMG from "../../Images/hover-cover2@2x.jpg";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function FoodDelivery() {
  const dispatch = useDispatch();
  //page setup handler
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  //mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);

  //photo device constants
  const mobileScreen1 = require("../../Images/Food_app/FA_1.png").default;
  const desktopScreen1 = require("../../Images/Food_app/FA_1@2x.png").default;
  const mobileScreen2 = require("../../Images/Food_app/FA_3.png").default;
  const desktopScreen2 = require("../../Images/Food_app/FA_3@2x.png").default;
  const mobileScreen3 = require("../../Images/Food_app/FA_2.png").default;
  const desktopScreen3 = require("../../Images/Food_app/FA_2@2x.png").default;
  const mobileScreen4 = require("../../Images/Food_app/FA_4.png").default;
  const desktopScreen4 = require("../../Images/Food_app/FA_4@2x.png").default;

  //font color
  const [textColor, setTextColor] = useState("#151515");
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

  //change background color
  const [sectionViewed, setSectionViewed] = useState(false);
  const backgroundColorHandler = useCallback(
    (inView) => {
      if (inView) {
        dispatch(changeAppColor("#151515"));
        dispatch(setNavColor("#fff"));
        setSectionViewed(true);
        setTextColor("#fff");
      } else if (!inView && sectionViewed) {
        dispatch(changeAppColor("#fff"));
        dispatch(resetNav());
        setTextColor("#151515");
        setSectionViewed(false);
      }
    },
    [dispatch, sectionViewed]
  );

  useEffect(() => {
    dispatch(setPageCursor("187, 236, 108"));
  }, [dispatch]);
  return (
    <motion.div
      className={styles["app-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["food", "delivery"]}
        description="//&#127828; a food delivery mobile app"
        scrollColor="#BBEC6C"
        bgColor="#BBEC6C"
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
          textColor={textColor}
          title="project details"
          projDesc="This was my second app that I developed with React Native. This was a food delivery app that allowed the user to choose from different food categories. Each food category is associated with a certain restaurant that comes with a rating, price, and location. The user can adjust the quantity of a certain order and the price adjusts accordingly. Using Google’s Directions API, I was able to highlight the driver’s path from the pickup location to the drop off. The map screen allows the user to zoom in and out. This app demonstrates my front-end ability to style mobile applications and HTTP requests with Google’s API."
          button
          linkType="external"
          linkTitle="GitHub"
          link="https://github.com/zaytheDEV/food-delivery-app/tree/main"
        />
      </div>
      <InView
        as="section"
        threshold={0.2}
        onChange={(inView) => backgroundColorHandler(inView)}
      >
        <section className={styles["app-screens"]}>
          <SectionTitle title="//app screens" title2="app design" />
          <BoldDescription titles={["app", "screens"]} textColor="#fff" />
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
      </InView>
      <div className={styles["challenges-container"]}>
        <ProjectDetails
          textColor={textColor}
          title="project challenges & solutions"
          projDesc="Since there is no back-end that holds the restaurants information, I had to gather all the information and input it into an array of objects for each restaurant. Each object held the rating, prices, names, photos, menu, and the location of the restaurant. This part took the longest to complete. For Google’s Directions API to set the markers and highlight the fastest route, it needs the longitude and latitude for the drop off location and the restaurant’s location. This took some time to properly connect, but I kept debugging and eventually I was able to get the app to work properly. "
        />
      </div>
      <section className={styles["project-tools"]}>
        <SectionTitle title="//project tools" />
        <BoldDescription titles={["tools for", "project"]} />
        <SkillsList
          skills={[
            "react native",
            "javaScript",
            "tailwind",
            "google places",
            "google distance",
            "google directions",
            "expo",
          ]}
        />
      </section>
      <NextProject projectImg={nextProjIMG} link="/uber-clone" />
      <Footer />
    </motion.div>
  );
}

export default FoodDelivery;
