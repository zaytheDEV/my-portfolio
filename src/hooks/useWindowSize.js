import { useEffect, useState } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// function useWindowHeight() {
//     const [windowHeight, setWindowHeight] = useState({
//       height: window.innerHeight * 0.01,
//     });
//     // We execute the same script as before
//     let vh = windowHeight.height;
//     let appHTML = document.querySelector('html');
//     useEffect(() => {
//       // Set window width/height to state
//       appHTML.style.setProperty("--vh", `${vh}px`);
//       setWindowHeight({
//         height: window.innerHeight * 0.01,
//       });
//     //eslint-disable-next-line
//     }, []); // Empty array ensures that effect is only run on mount
//     return windowHeight;
//   }