import React from 'react'
import styles from './skillsList.module.css';
function SkillsList(props) {
    let skills = props.skills
    return (
        <div className={styles["skills-main"]}>
        {skills.map((skill) => (
            <span 
            key={skill}
            className={styles["skill--circle"]} style={{color: `${props.textColor}`, borderColor: `${props.textColor}`}}>{skill}</span>
        ))}
        </div>
    )
}

export default SkillsList
