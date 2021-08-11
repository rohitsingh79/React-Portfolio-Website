import { TextareaAutosize } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import React, { useState } from "react";

const svgContainer = (props) => {
  const colorCode = props.color;
  return (
    <div
      style={{
        padding: "20px",
        width: "100px",
        height: "100px",
        marginBottom: "240px",
        position: "absolute",
        marginRight: "150x",
        display: "block"
      }}
    >
      <svg height="100" width="300">
        <polygon
          points="50 3,100 28,100 75, 50 100,3 75,3 25"
          fill={colorCode}
          stroke-width="5"
        />
      </svg>
    </div>
  );
};

export default svgContainer;
