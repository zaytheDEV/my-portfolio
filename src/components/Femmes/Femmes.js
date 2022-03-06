import React, {
  useEffect,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import Footer from "../pageComps/Footer";
import styles from "./femmes.module.css";
import { motion, useAnimation } from "framer-motion";
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
import designVideo from "../../Videos/design-final.mp4";
import mobileDesignVideo from "../../Videos/design-mobile-final.mp4";
import featureVideo1 from "../../Videos/user-alert-final.mp4";
import mobileFeatureVideo1 from "../../Videos/user-alert_mobile-final.mp4";
import featureVideo2 from "../../Videos/quickBag-final.mp4";
import mobileFeatureVideo2 from "../../Videos/feature2_mobile-final.mp4";
import nextProjIMG from "../../Images/food-app@2x.jpg";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Femmes() {
  const dispatch = useDispatch();
  //page setup handler
  useLayoutEffect(() => {
    dispatch(resetCursor());
  }, [dispatch]);
  const transition = { ease: [0.43, 0.13, 0.23, 0.96] };
  //mobile user selector
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);

  //intro animation handler
  const bannerAni = useAnimation();
  const bannerHandler = useCallback(
    (inView) => {
      if (inView) {
        bannerAni.start("visibleBanner");
      }
    },
    [bannerAni]
  );
  const introVariants = {
    hiddenBanner: {
      opacity: 0,
      scale: 1.2,
    },
    visibleBanner: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ...transition },
    },
  };
  const [sectionViewed, setSectionViewed] = useState(false);
  const backgroundColorHandler = useCallback(
    (inView) => {
      if (inView) {
        dispatch(changeAppColor("#fec5bb"));
        dispatch(setPageCursor("255, 255, 255"));
        setSectionViewed(true);
      } else if (!inView && sectionViewed) {
        dispatch(changeAppColor("#fff"));
        dispatch(setPageCursor("216, 226, 220"));
        setSectionViewed(false);
      }
    },
    [dispatch, sectionViewed]
  );
  //Photo device constants
  const mobileHeader =
    require("../../Images/femmes/Femmes-screens.jpg").default;
  const desktopHeader =
    require("../../Images/femmes/Femmes-screens@2x.jpg").default;
  const mobileScreen1 =
    require("../../Images/femmes/responsive-design.png").default;
  const desktopScreen1 =
    require("../../Images/femmes/responsive-design@2x.png").default;
  const mobileScreen2 = require("../../Images/femmes/screen1.jpg").default;
  const desktopScreen2 = require("../../Images/femmes/screen1@2x.jpg").default;
  const mobileScreen3 = require("../../Images/femmes/screen2.jpg").default;
  const desktopScreen3 = require("../../Images/femmes/screen2@2x.jpg").default;
  useEffect(() => {
    dispatch(setPageCursor("216, 226, 220"));
  }, [dispatch]);
  return (
    <motion.div
      className={styles["femmes-main"]}
      exit={{ opacity: 0, y: 50, transition: { duration: 1, ...transition } }}
    >
      <PageHeader
        titles={["femmes", "clothing"]}
        description="//&#128717; a full-stack clothing eCommerce store"
        scrollColor="#d8e2dc"
        bgColor="#d8e2dc"
      />
      <InView
        as="section"
        onChange={(inView) => bannerHandler(inView)}
        threshold={0.5}
        className={styles["app-header__img"]}
      >
        <motion.img
          variants={introVariants}
          initial="hiddenBanner"
          animate={bannerAni}
          src={isMobileUser ? mobileHeader : desktopHeader}
          alt="header"
        />
      </InView>
      <div className={styles["header-description__holder"]}>
        <ProjectDetails
          title="project details & design concept"
          paragraphTitle="approach"
          projDesc="This was my favorite and most difficult project yet. EVERYTHING to the logo, UI design, and code was created by me. I used Adobe XD to design the web pages and Illustrator to design the logo. After a month of blood, sweat, tears, and Googling, I was able to complete the full-stack shopping experience. "
          button
          linkTitle="launch project"
          link="https://femmes-app.web.app"
          linkType="external"
          paragraph2
          paragraphTitle2="design concept"
          projDesc2="I wanted to make sure that this project includes all the main components for a clothing eCommerce store. I first started with the mock-up design in Adobe XD. Designing the important pages like the home, cart, login, and favorites. I wanted the website to be unique to its’ user, so the upper navbar displays the users’ first name. After the design I went to work with React and created the website. "
        />
      </div>
      <section className={styles["design-process"]}>
        <SectionTitle title="//adobe xd design" title2="cite design" />
        <LazyLoadComponent>
          <div className={styles["design-process__video"]}>
            <video playsInline autoPlay muted loop>
              <source
                src={isMobileUser ? mobileDesignVideo : designVideo}
                type="video/mp4"
              />
            </video>
          </div>
        </LazyLoadComponent>
        <BoldDescription
          titles={["designed", "to fit", "all devices"]}
          textColor="#fec5bb"
        />
        <ProjectDetails
          title="From mock-up to code"
          paragraphTitle="Front-end Code"
          projDesc="Once I was satisfied with the Adobe Xd prototype, I was able to use React, JavaScript, and SASS to code the website. For the products, I created an array that held all the products pictures, prices, colors, etc. Redux was used to avoid “prop draining” for the cart, favorites, quick bag, and bag total. With React I was able to style the components with SASS and CSS modules. The app also includes user authentication. There is a whole lot more to the code for this project, so my GitHub will provide a better view of how I professionally write code."
          button
          linkTitle="GitHub"
          linkType="external"
          link="https://github.com/zaytheDEV/Femmes_clothing/tree/master"
        />
        <LazyLoadComponent>
          <div className={styles["design-process__design"]}>
            <div className={styles["desktop-img"]}>
              <img
                src={isMobileUser ? mobileScreen1 : desktopScreen1}
                alt="responsive-design"
              />
            </div>
            <div className={styles["desktop-img"]}>
              <img
                src={isMobileUser ? mobileScreen2 : desktopScreen2}
                alt="home-design"
              />
            </div>
            <div className={styles["desktop-img"]}>
              <img
                src={isMobileUser ? mobileScreen3 : desktopScreen3}
                alt="favorites-design"
              />
            </div>
          </div>
        </LazyLoadComponent>
      </section>
      <div className={styles["challenges-container"]}>
        <ProjectDetails
          title="project challenges & solutions"
          paragraphTitle="back-end issues"
          projDesc="I am currently learning and diving into the back-end of web development. I decided to use Google’s Firebase to host my back-end. So, the most difficult part for this project was connecting the users profile information, cart, and favorites to Firebase. Reading the Firebase documentation over and over again, I was able to connect all the user’s information to the back-end. Now my project can log in, log out, and load all the users’ favorites and/or cart items."
        />
      </div>
      <InView
        as="section"
        className={styles["project-features"]}
        id="app-features"
        onChange={(inView, entry) =>
          backgroundColorHandler(inView, entry.target.id)
        }
      >
        <SectionTitle title="//app features" />
        <BoldDescription
          titles={["app", "features", "better UX"]}
          textColor="#fff"
        />
        <div className={styles["feature-container"]}>
          <div className={styles["feature__description"]}>
            <h1>unique actions</h1>
            <p>
              I wanted to notify the user that their “action” as in adding an
              item to the cart or favorites, was successful. So instead of the
              normal modal screen popping up, I decided to animate a green bar
              from the bottom of the screen displaying the success message. The
              animation works on both mobile and desktop.
            </p>
          </div>
          <div className={styles["feature__video"]}>
            <LazyLoadComponent>
              <video playsInline autoPlay muted loop>
                <source
                  src={isMobileUser ? mobileFeatureVideo1 : featureVideo1}
                  type="video/mp4"
                />
              </video>
            </LazyLoadComponent>
          </div>
        </div>
        <div className={styles["feature-container"]}>
          <div className={styles["feature__description"]}>
            <h1>Quick Bag</h1>
            <p>
              The “quick bag” feature allows the user to view their bag/cart
              items and the subtotal. Without rendering the cart component, the
              user will be able to shop and view their cart total
              simultaneously.
            </p>
          </div>
          <div className={styles["feature__video"]}>
            <LazyLoadComponent>
              <video playsInline autoPlay muted loop>
                <source
                  src={isMobileUser ? mobileFeatureVideo2 : featureVideo2}
                  type="video/mp4"
                />
              </video>
            </LazyLoadComponent>
          </div>
        </div>
      </InView>
      <section className={styles["project-logo-design"]}>
        <SectionTitle title="//logo design" />
        <BoldDescription titles={["simple, but", "elegant"]} />
        <div className={styles["logo-description"]}>
          <div className={styles["logo-text"]}>
            <p className={styles["logo-text__text"]}>
              I am not a logo designer, so this process took some time for me. I
              really wanted to design everything on my own for this project,
              which is why I decided to learn the basics for Illustrator. I
              wanted something simple but at the same time something that
              displays what the website is all about. The final design was
              combing the letters “F” and “S” with the top and bottom of the “S”
              extracted.
            </p>
          </div>
          <div className={styles["logo-img"]}>
            <img src={require("../../Images/femmes.png").default} alt="" />
          </div>
        </div>
      </section>
      <section className={styles["project-tools"]}>
        <SectionTitle title="//project tools" />
        <BoldDescription titles={["tools for", "design &", "code"]} />
        <SkillsList
          skills={[
            "react",
            "sass",
            "BEM convention",
            "javaScript",
            "firebase",
            "framer-motion",
            "redux",
            "SVG",
            "API usage",
            "Page Routing",
            "URL parameters",
            "data structures",
            "functional programming",
            "UI/UX design",
            "photoShop",
            "illustrator",
            "adobeXd",
          ]}
        />
      </section>
      <NextProject projectImg={nextProjIMG} link="/food-delivery" />
      <Footer />
    </motion.div>
  );
}

export default Femmes;
