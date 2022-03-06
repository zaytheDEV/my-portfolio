import React, { useEffect, useLayoutEffect } from "react";
import Footer from "../pageComps/Footer";
import styles from "./amazonClone.module.css";
import { motion } from "framer-motion";
import ProjectDetails from "../ProjectComps/ProjectDetails";
import { resetCursor, setPageCursor } from "../../features/cursorSlice";
import { useDispatch, useSelector } from "react-redux";
import BoldDescription from "../BoldDescription/BoldDescription";
import SkillsList from "../SkillsList/SkillsList";
import PageHeader from "../PageHeader/PageHeader";
import SectionTitle from "../SectionTitle/SectionTitle";
import introVideo from "../../Videos/amazon-clone.mp4";
import mobileIntroVideo from "../../Videos/mobile_amazon-clone.mp4";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function AmazonClone() {
  const dispatch = useDispatch();
  //page setup handler
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);

  //device photo render
  const mobileFeature1 =
    require("../../Images/amazon_clone/feat-1.jpg").default;
  const desktopFeature1 =
    require("../../Images/amazon_clone/feat-1@2x.jpg").default;
  const mobileFeature2 =
    require("../../Images/amazon_clone/feat-2.jpg").default;
  const desktopFeature2 =
    require("../../Images/amazon_clone/feat-2@2x.jpg").default;
  const mobileFeature3 =
    require("../../Images/amazon_clone/feat-3.jpg").default;
  const desktopFeature3 =
    require("../../Images/amazon_clone/feat-3@2x.jpg").default;

  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

  //mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);

  useEffect(() => {
    dispatch(setPageCursor("252, 175, 23"));
  }, [dispatch]);
  return (
    <motion.div
      className={styles["amazon-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["cloned", "amazon"]}
        description="//&#128722; a full-stack Amazon Clone"
        scrollColor="#FCAF17"
        bgColor="#FCAF17"
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
          projDesc="This was my very first React project. So, watching tutorials and following along allowed me to get a better understanding of how React works. This was a very difficult project for my level and understanding of front-end development at the time. The main idea for this project was to style the clone to look like Amazon and connect a React app to a database. I also received practice working with APIs like using Stripe to take pseudo payments. "
          button
          linkTitle="launch project"
          link="https://clone-db2cf.web.app/"
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
                    The clone sign-in page looks very similar to Amazon. A user
                    can create or sign into their account
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
                    The quantity of items in the cart will be rendered in the
                    header section of the app
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
                    In the checkout component, the subtotal of the cart items is
                    rendered and updated each time the cart quantity updates
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
          paragraphTitle="project setup"
          projDesc="Looking back at my code for this project, it was advanced and clean for a beginner coder. There are many things that I would have changed if I were to redo this project today. The first is the folder and component organization. Components and styles were all in one folder. There was no organization. Also, I would have used CSS modules and SASS to style each component. Though as a first project, I think it still was developed very well. "
          button
          linkTitle="GitHub"
          link="https://github.com/zaytheDEV/amazon-clone"
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
            "data structures",
            "API usage",
            "firebase",
            "Stripe Payments",
            "redux",
          ]}
        />
      </section>
      <Footer />
    </motion.div>
  );
}

export default AmazonClone;
