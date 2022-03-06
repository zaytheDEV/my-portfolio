import styles from "./work.module.css";
import { motion } from "framer-motion";
import Project from "./Project";
import Footer from "../pageComps/Footer";
import BoldDescription from "../BoldDescription/BoldDescription";
import PageHeader from "../PageHeader/PageHeader";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { resetCursor } from "../../features/cursorSlice";
import SectionTitle from "../SectionTitle/SectionTitle";

function Work() {
  //page setup Handler
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  //Animation variables
  const variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
    },
    sectHidden: {
      y: 50,
      opacity: 0,
    },
    sectVisible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ...transition },
    },
  };
  return (
    <motion.div
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
      className={styles["work-main"]}
    >
      <PageHeader
        titles={["zay's", "projects"]}
        description="//&#128187; app & web-dev projects"
      />
      <section className={styles["intro-description"]}></section>
      <motion.section
        variants={variants}
        initial="sectHidden"
        animate="sectVisible"
        className={styles["projects"]}
      >
        <Project
          sectionTitle="//web development"
          projectNumber="01"
          projectImg={require("../../Images/proj-cover-1@2x.jpg").default}
          projectTitle="femmes"
          projectDescription="full-stack eCommerce website"
          moveUp
          url="/femmes"
          hoverColor="216, 226, 220, .8"
        />
        <Project
          sectionTitle="//app development"
          projectNumber="02"
          projectImg={require("../../Images/proj-cover-2@2x.jpg").default}
          projectTitle="food delivery"
          projectDescription="React Native delivery app"
          url="/food-delivery"
          hoverColor="187, 236, 108, 0.8"
          moveUp
        />
        <Project
          sectionTitle="//app development"
          projectNumber="03"
          projectImg={require("../../Images/proj-cover-3@2x.jpg").default}
          projectTitle="uber clone"
          projectDescription="React Native clone"
          hoverColor="245, 82, 82, 0.8"
          url="/uber-clone"
          lrgImg
          uber
          moveUp
        />
        <Project
          sectionTitle="//web development"
          projectNumber="04"
          projectImg={require("../../Images/proj-cover-4@2x.jpg").default}
          projectTitle="netflix clone"
          projectDescription="Full-stack Netflix clone"
          hoverColor="179, 0, 0, 0.8"
          url="/netflix-clone"
          lrgImg
          uber
          moveUp
        />
        <Project
          sectionTitle="//web development"
          projectNumber="05"
          projectImg={require("../../Images/proj-cover-5@2x.jpg").default}
          projectTitle="amazon clone"
          projectDescription="Full-stack Amazon clone"
          hoverColor="252, 175, 23, 0.8"
          url="/amazon-clone"
          lrgImg
          uber
          moveUp
        />
      </motion.section>
      <div className={styles["page-description"]}>
        <SectionTitle title="//my ambition"/>
        <BoldDescription titles={["i am", "ready", "for more."]} />
        <p>
          Each project starting from the bottom of the list, displays my
          progression and understanding of React and proper coding standards.
          With each completed project, I increased my knowledge in appropriate
          naming conventions, reusable code, and performance driven functions.
        </p>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Work;
