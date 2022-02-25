import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../index.css";

const Animation = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 4000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>
    </>
  );
};

Animation.defaultProps = {
  text: "Hello World!",
};

Animation.propTypes = {
  text: PropTypes.string,
};

export default Animation;
