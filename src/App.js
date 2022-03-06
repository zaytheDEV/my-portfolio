import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import ScrollToTop from "./hooks/ScrollToTop";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { isMobile, isTablet } from "react-device-detect";
import { setMobileUser } from "./features/mobileSlice";
import { AnimatePresence } from "framer-motion";
import { setAppColor } from "./features/colorSlice";
import { resetNav } from "./features/navSlice";
import Femmes from "./components/Femmes/Femmes";
import AmazonClone from "./components/AmazonClone/AmazonClone";
import NetflixClone from "./components/NetflixClone/NetflixClone";
import UberClone from "./components/UberClone/UberClone";
import FoodDelivery from "./components/FoodAppPage/FoodDelivery";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Home from "./components/Home/Home";



function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  //mobile user handler
  useEffect(() => {
    if (isMobile || isTablet) {
      setUserIsMobile(true);
      dispatch(setMobileUser(true));
    }
  }, [dispatch]);
  useLayoutEffect(() => {
    dispatch(setAppColor());
    dispatch(resetNav());
  }, [dispatch, location.pathname]);

  //body selector
  const titleDotReady = useSelector((state) => state.dot.dotReady);
  const [loading, setLoading] = useState(true);
  const [userIsMobile, setUserIsMobile] = useState(false);

  return (
    <>
      <Navigation />
      {loading ? (
        <div key="loader">
          <Loader setLoading={setLoading} />
        </div>
      ) : (
        <>
          {titleDotReady && !userIsMobile && <CustomCursor />}
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/femmes">
                <ScrollToTop />
                <Femmes />
              </Route>
              <Route exact path="/amazon-clone">
                <ScrollToTop />
                <AmazonClone />
              </Route>
              <Route exact path="/netflix-clone">
                <ScrollToTop />
                <NetflixClone />
              </Route>
              <Route exact path="/uber-clone">
                <ScrollToTop />
                <UberClone />
              </Route>
              <Route exact path="/food-delivery">
                <ScrollToTop />
                <FoodDelivery />
              </Route>
              <Route exact path="/work">
                <ScrollToTop />
                <Work />
              </Route>
              <Route exact path="/about">
                <ScrollToTop />
                <About />
              </Route>
              <Route path="/">
                <ScrollToTop />
                <Home />
              </Route>
              {/* Page not Found */}
              <Route path="*"></Route>
            </Switch>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
