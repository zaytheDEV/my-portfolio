import React from "react";
import '../ProjectComps/ProjectView.css'
function ProjectView(props) {
  return (
    <div className="viewPage__item">
      <div className="viewPage_IMG">
        <img
          src={process.env.PUBLIC_URL + `/images/mockups/${props.Image}`}
          alt="view-page"
        />
      </div>
      <div className="viewPage-caption">{props.Caption}</div>
    </div>
  );
}

export default ProjectView;
