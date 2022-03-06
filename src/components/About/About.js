import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import styles from "./about.module.css";
import Footer from "../pageComps/Footer";
import { motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeAppColor } from "../../features/colorSlice";
import { resetCursor } from "../../features/cursorSlice";
import { InView } from "react-intersection-observer";
import LinkButton from "../LinkButton/LinkButton";
import SkillsList from "../SkillsList/SkillsList";
import BoldDescription from "../BoldDescription/BoldDescription";
import { setNavColor } from "../../features/navSlice";
import PageHeader from "../PageHeader/PageHeader";
import AboutParagraph from "./AboutParagraph";

function About() {
  //page setup Handler
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  //Mobile user Selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);
  const appColor = useSelector((state) => state.appColor.color);
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  const [textColor, setTextColor] = useState("#151515");

  //Header photo intro
  const introPhotoAni = useAnimation();
  const introPhotoCoverAni = useAnimation();
  const photoVariants = {
    hidden: {
      scale: 1.3,
    },
    visible: {
      scale: 1,
      transition: { duration: 1.6, ...transition },
    },
    coverShown: {
      width: "100%",
    },
    coverRemove: {
      width: 0,
      transition: { duration: 1.5, ...transition },
    },
  };
  const introPhotoHandler = (inView) => {
    if (inView) {
      introPhotoCoverAni.start("coverRemove");
      introPhotoAni.start("visible");
    }
  };
  //page variants
  const pageVariants = {
    paraHidden: {
      y: 50,
      opacity: 0,
    },
    paraVisible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ...transition },
    },
    learningBlockHidden: {
      y: "100%",
      opacity: 0,
    },
    learningBlockVisible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.3, ...transition },
    },
    lineHidden: {
      width: 0,
    },
    lineVisible: {
      width: "100%",
      transition: { duration: 1.3, ...transition },
    },
  };
  //description animation functions
  const descriptionAni = useAnimation();
  const secondDescriptionAni = useAnimation();
  const [descriptionSectionViewed, setDescriptionSectionViewed] =
    useState(false);
  const introDescriptionHandler = (inView) => {
    if (inView) {
      dispatch(setNavColor("#fff"));
      dispatch(changeAppColor("#151515"));
      descriptionAni.start("paraVisible");
      setDescriptionSectionViewed((value) => !value);
    } else if (!inView && descriptionSectionViewed) {
      dispatch(setNavColor("#151515"));
      dispatch(changeAppColor("#fff"));
      setDescriptionSectionViewed((value) => !value);
    }
  };
  const secondDescriptionHandler = useCallback(
    (inView) => {
      if (inView) {
        secondDescriptionAni.start("paraVisible");
      }
    },
    [secondDescriptionAni]
  );
  //Header photo constants
  const mobileHeader = require("../../Images/mobile-about.jpg").default;
  const desktopHeader = require("../../Images/photo.jpg").default;

  useEffect(() => {
    if (appColor === "#151515") {
      setTextColor("#fff");
    } else {
      setTextColor("#151515");
    }
  }, [appColor]);
  return (
    <motion.div
      className={styles["about-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["zay's", "dev story"]}
        description="//&#129299; just a nerd creating amazing things for the web"
      />
      <InView
        threshold={isMobileUser ? 0.5 : 0.4}
        onChange={(inView) => introPhotoHandler(inView)}
        as="section"
        className={styles["header-photo-main"]}
      >
        <div className={styles["photos-container"]}>
          <motion.img
            variants={photoVariants}
            initial="hidden"
            animate={introPhotoAni}
            src={isMobileUser ? mobileHeader : desktopHeader}
            alt="main"
          />
          <motion.div
            variants={photoVariants}
            initial="coverShown"
            animate={introPhotoCoverAni}
            className={styles["photo-cover"]}
          ></motion.div>
        </div>
      </InView>
      <section className={styles.skills__container}>
        <BoldDescription
          titles={["my coding", "tools"]}
          textColor={textColor}
        />
        <span className={styles.skill__type} style={{ color: `${textColor}` }}>
          web development | app development | UI/UX design
        </span>
        <SkillsList
          skills={[
            "JavaScript",
            "ReactJs",
            "React Native",
            "nodeJs",
            "API usage",
            "mongoDB",
            "JSON",
            "Firebase",
            "framer motion",
            "HTML5",
            "CSS3",
            "SASS",
            "BEM",
            "TailWind",
            "GitHub",
            "photoshop",
            "adobe XD",
          ]}
          textColor={textColor}
        />
      </section>
      <InView
        as="section"
        id="intro-desc"
        threshold={0.2}
        onChange={(inView) => introDescriptionHandler(inView)}
        className={styles["about-description-container"]}
      >
        <BoldDescription
          titles={["a little", "about me"]}
          textColor={textColor}
        />
        <motion.div
          variants={pageVariants}
          initial="paraHidden"
          animate={descriptionAni}
          className={styles["about-description__description"]}
        >
          <AboutParagraph color={textColor}>
            Hi, my name is Isaiah Gore, but you can call me <b>“Zay”</b> for
            short. I am a creative Software Engineer based in Los Angeles. I
            specialize in front-end development. I create  and develop slick,
            interactive, and performance efficient web apps<b>.</b>
          </AboutParagraph>
          <AboutParagraph color={textColor}>
            From the first time I wrote and debugged my code, I knew my vocation
            was software Engineering. I gained my understanding with many
            frameworks and languages not only through long hours at school, but
            also through hours on Udemy. I love that I am apart of an industry
            that offers lifelong learning, growing, and creativity<b>.</b>
          </AboutParagraph>
          <AboutParagraph color={textColor}>
            Just a nerd who cannot stop learning and growing as a Software
            Engineer<b>!</b>
          </AboutParagraph>
          <div className={styles["button-holder"]}>
            <LinkButton
              title="my work"
              link="/work"
              color={textColor}
              linkType=""
            />
            <LinkButton
              title="GitHub"
              link="https://github.com/zaytheDEV"
              color={textColor}
              linkType="external"
            />
          </div>
        </motion.div>
      </InView>
      <section className={styles["my-learning"]}>
        <BoldDescription titles={["my", "journey"]} textColor={textColor} />
        <div className={styles["courses-main"]}>
          <InView threshold={1}>
            {({ inView, ref }) => (
              <div ref={ref} className={styles.course}>
                <motion.div
                  variants={pageVariants}
                  initial="learningBlockHidden"
                  animate={inView && "learningBlockVisible"}
                  className={styles["course-block"]}
                >
                  <span style={{ color: `${textColor}` }}>education</span>
                  <div className={styles["course-description"]}>
                    <p style={{ color: `${textColor}` }}>
                      San Francisco State University
                    </p>
                    <li style={{ color: `${textColor}` }}>
                      Bachelors of Computer Science
                    </li>
                    <li style={{ color: `${textColor}` }}>July 2022</li>
                  </div>
                </motion.div>
                <motion.div
                  variants={pageVariants}
                  initial="lineHidden"
                  animate={inView && "lineVisible"}
                  className={styles["course__line"]}
                  style={{ backgroundColor: `${textColor}` }}
                ></motion.div>
              </div>
            )}
          </InView>
          <InView threshold={1}>
            {({ inView, ref }) => (
              <div ref={ref} className={styles.course}>
                <motion.div
                  variants={pageVariants}
                  initial="learningBlockHidden"
                  animate={inView && "learningBlockVisible"}
                  className={styles["course-block"]}
                >
                  <span style={{ color: `${textColor}` }}>udemy</span>
                  <div className={styles["course-description"]}>
                    <p style={{ color: `${textColor}` }}>
                      JavaScript - The Complete Guide
                    </p>
                    <li style={{ color: `${textColor}` }}>- 599 videos</li>
                    <li style={{ color: `${textColor}` }}>
                      - 52.5 total learning hours
                    </li>
                  </div>
                </motion.div>
                <motion.div
                  variants={pageVariants}
                  initial="lineHidden"
                  animate={inView && "lineVisible"}
                  className={styles["course__line"]}
                  style={{ backgroundColor: `${textColor}` }}
                ></motion.div>
              </div>
            )}
          </InView>
          <InView threshold={1}>
            {({ inView, ref }) => (
              <div ref={ref} className={styles.course}>
                <motion.div
                  variants={pageVariants}
                  initial="learningBlockHidden"
                  animate={inView && "learningBlockVisible"}
                  className={styles["course-block"]}
                >
                  <span style={{ color: `${textColor}` }}>udemy</span>
                  <div className={styles["course-description"]}>
                    <p style={{ color: `${textColor}` }}>
                      React - The Complete Guide
                    </p>
                    <li style={{ color: `${textColor}` }}>-491 videos</li>
                    <li style={{ color: `${textColor}` }}>
                      -48.5 total learning hours
                    </li>
                  </div>
                </motion.div>
                <motion.div
                  variants={pageVariants}
                  initial="lineHidden"
                  animate={inView && "lineVisible"}
                  className={styles["course__line"]}
                  style={{ backgroundColor: `${textColor}` }}
                ></motion.div>
              </div>
            )}
          </InView>
          <InView threshold={1}>
            {({ inView, ref }) => (
              <div ref={ref} className={styles.course}>
                <motion.div
                  variants={pageVariants}
                  initial="learningBlockHidden"
                  animate={inView && "learningBlockVisible"}
                  className={styles["course-block"]}
                >
                  <span
                    className={styles["course--python"]}
                    style={{ color: `${textColor}` }}
                  >
                    udemy
                  </span>
                  <div className={styles["course-description"]}>
                    <p style={{ color: `${textColor}` }}>
                      The Complete Node.js Developer Course
                    </p>
                    <li style={{ color: `${textColor}` }}>-177 videos</li>
                    <li style={{ color: `${textColor}` }}>
                      -35 total learning hours
                    </li>
                  </div>
                </motion.div>
                <motion.div
                  variants={pageVariants}
                  initial="lineHidden"
                  animate={inView && "lineVisible"}
                  className={styles["course__line"]}
                  style={{ backgroundColor: `${textColor}` }}
                ></motion.div>
              </div>
            )}
          </InView>
        </div>
      </section>
      <InView
        as="section"
        threshold={0.3}
        className={styles["short-description"]}
        onChange={(inView) => secondDescriptionHandler(inView)}
      >
        <motion.p
          variants={pageVariants}
          animate={secondDescriptionAni}
          initial="paraHidden"
          style={{ color: textColor }}
        >
          I am eager to start new projects, grow, and expand my knowledge as a
          developer
          <span style={{ color: "#f55252" }}>!</span>
        </motion.p>
      </InView>
      <Footer />
    </motion.div>
  );
}

export default About;
