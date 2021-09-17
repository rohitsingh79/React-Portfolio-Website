import React from "react";
import SvgIcon from "./SvgIcon";

import {
  TimeLineWrapper,
  ColumnContainer,
  TimeLineBar,
  TimeLineChild
} from "./style";

const TimeLine = ({ forwardedRef }) => {
  return (
    <div
      ref={forwardedRef}
      style={{
        padding: "2em 0px",
        transform: "translate(340px)"
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
          HIGHLIGHTS
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
          Timeline
        </h2>
      </div>
      <ColumnContainer>
        <TimeLineBar />
        <TimeLineWrapper>
          <TimeLineChild backgroundColor={"#f9bf3f"}>
            <SvgIcon />
            <h3 style={{ paddingLeft: "20px" }}>
              Internship at Juniper 2019-present
            </h3>
            <p style={{ paddingLeft: "20px" }}>
              I recently have joined the Juniper Networs as a Software
              Developer-Intern in the DevOps team. My major part of the work has
              been into the field of creating sustainable and flexible CI/CD
              (Continuous Integration & Continuous Development) pipelines which
              enables developers at Juniper to do rapid development. I am also
              exploring the role of container technology like Docker and
              container-orchrastation technologies like K8s, Swarm to create
              industry standard production environments.
            </p>
          </TimeLineChild>

          <TimeLineChild backgroundColor={"#a84cb8"}>
            <SvgIcon />
            <h3 style={{ paddingLeft: "20px" }}>
              Internship at Juniper 2019-present
            </h3>
            <p style={{ paddingLeft: "20px" }}>
              I recently have joined the Juniper Networs as a Software
              Developer-Intern in the DevOps team. My major part of the work has
              been into the field of creating sustainable and flexible CI/CD
              (Continuous Integration & Continuous Development) pipelines which
              enables developers at Juniper to do rapid development. I am also
              exploring the role of container technology like Docker and
              container-orchrastation technologies like K8s, Swarm to create
              industry standard production environments.
            </p>
          </TimeLineChild>

          <TimeLineChild backgroundColor={"#2fa499"}>
            <SvgIcon />
            <h3 style={{ paddingLeft: "20px" }}>
              Internship at Juniper 2019-present
            </h3>
            <p style={{ paddingLeft: "20px" }}>
              I recently have joined the Juniper Networs as a Software
              Developer-Intern in the DevOps team. My major part of the work has
              been into the field of creating sustainable and flexible CI/CD
              (Continuous Integration & Continuous Development) pipelines which
              enables developers at Juniper to do rapid development. I am also
              exploring the role of container technology like Docker and
              container-orchrastation technologies like K8s, Swarm to create
              industry standard production environments.
            </p>
          </TimeLineChild>
        </TimeLineWrapper>
      </ColumnContainer>
    </div>
  );
};

export default TimeLine;
