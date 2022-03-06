import React, { useEffect, useLayoutEffect } from "react";
import Footer from "../pageComps/Footer";
import styles from "./netflixClone.module.css";
import { motion } from "framer-motion";
import ProjectDetails from "../ProjectComps/ProjectDetails";
import { resetCursor, setPageCursor } from "../../features/cursorSlice";
import { useDispatch, useSelector } from "react-redux";
import BoldDescription from "../BoldDescription/BoldDescription";
import NextProject from "../AppDesignPage/NextProject";
import SkillsList from "../SkillsList/SkillsList";
import PageHeader from "../PageHeader/PageHeader";
import SectionTitle from "../SectionTitle/SectionTitle";
import nextProjIMG from "../../Images/hover-cover4@2x.jpg";
import introVideo from "../../Videos/netflix-clone.mp4";
import mobileIntroVideo from "../../Videos/mobile-netflix-clone.mp4";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function NetflixClone() {
  const dispatch = useDispatch();
  //page setup handler
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

  //mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);

  //device photo render
  const mobileFeature1 =
    require("../../Images/netflix_clone/feat-1.jpg").default;
  const desktopFeature1 =
    require("../../Images/netflix_clone/feat-1@2x.jpg").default;
  const mobileFeature2 =
    require("../../Images/netflix_clone/feat-2.jpg").default;
  const desktopFeature2 =
    require("../../Images/netflix_clone/feat-2@2x.jpg").default;
  const mobileFeature3 =
    require("../../Images/netflix_clone/feat-3.jpg").default;
  const desktopFeature3 =
    require("../../Images/netflix_clone/feat-3@2x.jpg").default;

  useEffect(() => {
    dispatch(setPageCursor("179, 0, 0"));
  }, [dispatch]);
  return (
    <motion.div
      className={styles["netflix-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["cloned", "netflix"]}
        description="//&#128250; a full-stack Netflix Clone"
        scrollColor="#B30000"
        bgColor="#B30000"
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
          paragraphTitle="approach"
          projDesc="This was my second project that I developed using React. The objective of this project was to get a better understanding with React, styling, and working with databases. Like Netflix, the project allows a user to make an account and sign into their account. The videos are trailers from IMDB API and YouTube.  "
          button
          linkTitle="launch project"
          link="https://netflix-clone2-bf560.firebaseapp.com/"
          linkType="external"
        />
      </div>
      <section className={styles["features"]}>
        <SectionTitle title="//app features" />
        <BoldDescription titles={["app", "features"]} />
        <LazyLoadComponent>
          <div className={styles["features-container"]}>
            <div className={styles["features-row"]}>
              <div className={styles["feature"]}>
                <div className={styles["feature__img"]}>
                  <img
                    src={isMobileUser ? mobileFeature1 : desktopFeature1}
                    alt="feat1"
                  />
                </div>
                <div className={styles["feature__description"]}>
                  <p>
                    A user can log-in or create an account. The account
                    information will be stored in Firebase database{" "}
                  </p>
                </div>
              </div>
              <div className={styles["feature"]}>
                <div className={styles["feature__img"]}>
                  <img
                    src={isMobileUser ? mobileFeature2 : desktopFeature2}
                    alt="feat2"
                  />
                </div>
                <div className={styles["feature__description"]}>
                  <p>
                    With the IMDB API when a user clicks a movie title, a
                    trailer is rendered below the movie title
                  </p>
                </div>
              </div>
              <div className={styles["feature"]}>
                <div className={styles["feature__img"]}>
                  <img
                    src={isMobileUser ? mobileFeature3 : desktopFeature3}
                    alt="feat3"
                  />
                </div>
                <div className={styles["feature__description"]}>
                  <p>
                    The Edit profile screen shows the user’s selected package
                    and the sign-out button
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LazyLoadComponent>
      </section>
      <div className={styles["recap-container"]}>
        <ProjectDetails
          title="project recap"
          paragraphTitle="coding conventions"
          projDesc=" Looking back at this project, I can see how my coding style drastically evolved from a beginner to more of a professional level. There weren’t any actual coding mistakes in this project, but the class names could have been approved and the CSS styling could have been approved as well. I wanted to leave the code how I first wrote it to see and compare my code from then till now. I am now able to write better comments, consistent name schemes, clever and readable code. "
          button
          linkTitle="GitHub"
          link="https://github.com/zaytheDEV/netflix-clone/tree/master"
          linkType="external"
        />
      </div>
      <section className={styles["project-tools"]}>
        <SectionTitle title="//project tools" />
        <BoldDescription titles={["tools for", "design &", "code"]} />
        <SkillsList
          skills={[
            "react",
            "CSS3",
            "javaScript",
            "firebase",
            "IMDB API requests",
            "redux",
          ]}
        />
      </section>
      <NextProject projectImg={nextProjIMG} link="/amazon-clone" />
      <Footer />
    </motion.div>
  );
}

export default NetflixClone;
