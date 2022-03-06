import React from "react";
import pageStyles from "../../styles/pageStyles.module.css";
function AppPreview(props) {

  return (
    <div className={pageStyles["app-preview"]}>
      <div className={pageStyles.appPreview__video}>
        <img
          src={process.env.PUBLIC_URL + `/images/mockups/${props.photo}`}
          alt="appPreview"
        />
      </div>
    </div>
  );
}

export default AppPreview;
