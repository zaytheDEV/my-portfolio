import React from "react";
import styles from "./nextProject.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCursorPicture, shrinkCursor } from "../../features/cursorSlice";
import { useHistory } from "react-router";
function NextProject(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobileUser = useSelector((state) => state.mobileUser.isMobileUser);
  const mouseHoverHandler = () => {
    dispatch(setCursorPicture(props.projectImg));
  };
  const mouseLeaveHandler = () => {
    dispatch(shrinkCursor());
  };
  return (
    <section className={styles["next-project"]}>
      {isMobileUser && (
        <div
          className={styles["next-project-title"]}
          onClick={() => history.push(props.link)}
        >
          <span>Next project</span>
        </div>
      )}
      {!isMobileUser && (
        <div
          onMouseEnter={() => mouseHoverHandler()}
          onMouseLeave={() => mouseLeaveHandler()}
          onClick={() => history.push(props.link)}
          className={styles["next-project-title"]}
        >
          <span>Next project</span>
        </div>
      )}
    </section>
  );
}

export default NextProject;
