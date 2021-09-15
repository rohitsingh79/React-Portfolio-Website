import React from "react";
import SvgContainer from "./SvgContainer";
import { GridContainer } from "./style";

const GridBox = ({ forwardedRef }) => {
  return (
    <GridContainer
      // bottomBorderColor={props.bottomBorderColor}
      ref={forwardedRef}
    >
      <div className="GridChild" style={{ borderBottom: "2px solid #2c98f0" }}>
        <SvgContainer color="#2c98f0" />
        <div>
          <h3>Web Development</h3>
          <p>
            I have experience building websites and chrome extentions using
            JavaScript,React,HTML,CSS
          </p>
        </div>
      </div>
      <div className="GridChild" style={{ borderBottom: "2px solid #f9bf3f" }}>
        <SvgContainer color="#f9bf3f" />
        <div>
          <h3>Automation Testing</h3>
          <p>
            I have experience building websites and chrome extentions using
            JavaScipt
          </p>
        </div>
      </div>
      <div className="GridChild" style={{ borderBottom: "2px solid #2fa499" }}>
        <SvgContainer color="#2fa499" />
        <div>
          <h3>Devops</h3>
          <p>
            I have experience building websites and chrome extentions using
            JavaScipt
          </p>
        </div>
      </div>
    </GridContainer>
  );
};

export default GridBox;
