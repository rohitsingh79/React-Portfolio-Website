import { size } from "lodash";
import React, { useState } from "react";
import { ProgressContainer, GridContainer } from "./style";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    };

    setStyle(newStyle);
  }, 100);

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
          fontSize: "15px"
        }}
      >
        {done}%
      </div>
    </GridContainer>
  );
};

export default ProgressBar;
