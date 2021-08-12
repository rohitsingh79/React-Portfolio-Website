import React from "react";
import SvgContainer from "./SvgContainer";
import { GridContainer } from "./style";

const GridBox = () => {
  return (
    <GridContainer>
      <div className="GridChild">
        <SvgContainer color="#2c98f0" />
        <div>
          <h3>Web Development</h3>
          <p>
            I have experience building websites and chrome extentions using
            JavaScript,React,HTML,CSS
          </p>
        </div>
      </div>
      <div className="GridChild">
        <SvgContainer color="#f9bf3f" />
        <div>
          <p>Automnation Testing</p>
        </div>
      </div>
      <div className="GridChild">
        <SvgContainer color="#2fa499" />
        <div>
          <p>Devops</p>
        </div>
      </div>
    </GridContainer>
  );
};

export default GridBox;
