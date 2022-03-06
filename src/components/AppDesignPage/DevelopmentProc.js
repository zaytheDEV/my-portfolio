import React from "react";
import appPageStyles from "../../styles/pageStyles.module.css";
function DevelopmentProc(props) {
  return (
    <div className={appPageStyles.devProc__main}>
      <div>
         <span data-title='development'></span>
         <span data-title='process'></span>
      </div>
      <p>
        {props.description}
      </p>
    </div>
  );
}

export default DevelopmentProc;
