import React from "react";
import SvgContainer from "./SvgContainer";
import { GridContainer } from "./style";

const GridBox = ({ forwardedRef }) => {
  return (
    <div
      style={{
        padding: "2em 0px",
        transform: "translate(320px)"
      }}
    >
      <div
        style={{
          width: "667px",
          height: "100px",
          "text-align": "left",
          "letter-spacing": "5px"
        }}
      >
        <div style={{ color: "#999999", "margin-bottom": "15px" }}>
          WHAT DO I DO?
        </div>
        <h2
          style={{
            "font-family": "'Roboto', sans-serif",
            "font-weight": "500",
            "text-transform": "uppercase",
            "letter-spacing": "5px",
            "text-align": "left",
            "font-size": "18px",
            marginBottom: "36px"
          }}
        >
          Here are some of my Expertise
        </h2>
      </div>

      <GridContainer
        // bottomBorderColor={props.bottomBorderColor}
        ref={forwardedRef}
      >
        <div
          className="GridChild"
          style={{ borderBottom: "2px solid #2c98f0" }}
        >
          <SvgContainer color="#2c98f0" />
          <div>
            <h3>Web Development</h3>
            <p>
              I have experience building websites and chrome extentions using
              JavaScript,React,HTML,CSS
            </p>
          </div>
        </div>
        <div
          className="GridChild"
          style={{ borderBottom: "2px solid #f9bf3f" }}
        >
          <SvgContainer color="#f9bf3f" />
          <div>
            <h3>Automation Testing</h3>
            <p>
              I have experience building websites and chrome extentions using
              JavaScipt
            </p>
          </div>
        </div>
        <div
          className="GridChild"
          style={{ borderBottom: "2px solid #2fa499" }}
        >
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
    </div>
  );
};

export default GridBox;
