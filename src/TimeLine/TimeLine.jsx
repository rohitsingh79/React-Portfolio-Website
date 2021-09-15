import React from "react";
import SvgIcon from "./SvgIcon";

import {
  TimeLineWrapper,
  ColumnContainer,
  TimeLineBar,
  TimeLineChild
} from "./style";

const TimeLine = () => {
  return (
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
  );
};

export default TimeLine;
