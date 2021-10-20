import React from "react";
import { HexagonMainWrapper } from "./style";

const svgContainer = (props) => {
  const colorCode = props.color;
  return (
    <HexagonMainWrapper>
      <svg height="100" width="100">
        <polygon
          points="50 3,100 28,100 75, 50 100,3 75,3 25"
          fill={colorCode}
          stroke-width="5"
        />
      </svg>
      {props.children}
    </HexagonMainWrapper>
  );
};

export default svgContainer;
