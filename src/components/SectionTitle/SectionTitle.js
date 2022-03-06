import React from 'react';
import styles from './sectionTitle.module.css';

function SectionTitle(props) {
    return (
        <div className={styles["section-title"]}>
          <span>{props.title}</span>
          {props.title2 && (
          <span>{props.title2}</span>
          )}
        </div>
    )
}

export default React.memo(SectionTitle);
