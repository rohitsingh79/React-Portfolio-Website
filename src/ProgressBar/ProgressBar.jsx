import React, { useState } from "react";
import { ProgressContainer } from "./style";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    };

    setStyle(newStyle);
  }, 200);

  return (
    <ProgressContainer>
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </ProgressContainer>
  );
};

export default ProgressBar;
