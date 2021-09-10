import { useEffect } from "react";
import React, { useState } from "react";
import { ProgressContainer, GridContainer } from "./style";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };

      setStyle(newStyle);
    }, 500);
    console.log("on first render");
  }, []);

  return (
    <GridContainer>
      <ProgressContainer>
        <div className="progress-done" style={style}></div>
      </ProgressContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          color: "rgba(0, 0, 0, 0.7)"
        }}
      >
        {done}%
      </div>
    </GridContainer>
  );
};

export default ProgressBar;
