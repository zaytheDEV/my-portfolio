import React from 'react'
import "../styles/WorkProject.css";
function WorkProject(props) {
    const bannerImage = props.bannerImage;
    return (
        <div className='workProject_Main'>
            <div className="workProject_img_container" style={{ backgroundColor: props.coverColor }}>
                <img className={bannerImage ? 'bannerStyle' : 'logoStyle'} src={process.env.PUBLIC_URL + props.projectImage} alt="netflix-logo"/>
            </div>
            <div className="workProject_description">
                <p><b>{props.boldTitle}</b> - {props.description}</p>
            </div>
        </div>
    )
}

export default WorkProject
