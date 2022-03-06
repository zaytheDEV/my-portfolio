import React, { useState } from "react";
import styles from "./aboutParagraph.module.css";
import { InView } from "react-intersection-observer";
function AboutParagraph(props) {
  const [textinView, setTextInView] = useState(false);
  const inViewHandler = (inView) => {
    if (inView) {
      setTextInView(true);
    }
  };
  return (
    <InView
      as="p"
      threshold={0.5}
      triggerOnce={true}
      className={styles["paragraph"]}
      onChange={(inView) => inViewHandler(inView)}
      style={{ color: props.color, opacity: textinView ? 1 : 0.4 }}
    >
      {props.children}
    </InView>
  );
}

export default AboutParagraph;
