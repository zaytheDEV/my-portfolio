import React from "react";
import appPageStyles from "../../styles/pageStyles.module.css";
function DevTools(props) {
  return (
    <div 
    className={appPageStyles.devTool__holder}
    >
      <div className={appPageStyles.tool__image}>
        <img
          className={props.lrgIMG ? appPageStyles.toolLrg : ''}
          src={process.env.PUBLIC_URL + `/images/devTools/${props.toolIMG}`}
          alt="devTool"
        />
      </div>
      <div className={appPageStyles.tool__title}>
        <span>{props.toolTitle}</span>
      </div>
    </div>
  );
}

export default DevTools;
