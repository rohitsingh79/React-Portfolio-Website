import React, { useRef, useEffect } from "react";
import SvgIcon from "./SvgIcon";
import get from "lodash/get";

import {
  TimeLineWrapper,
  ColumnContainer,
  TimeLineBar,
  TimeLineChild
} from "./style";

const TimeLine = ({ forwardedRef }) => {
  const timeLine1 = useRef(null);
  const timeLine2 = useRef(null);
  const timeLine3 = useRef(null);

  const timeLineRef = [
    { section: "timeLine2", ref: timeLine1 },
    { section: "timeLine2", ref: timeLine2 },
    { section: "timeLine3", ref: timeLine3 }
  ];

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        let transitionDelay = entry.target.dataset.transitiondelay;
        console.log(transitionDelay);
        entry.target.style.cssText = `opacity:1 ;
        transform: translateY(10px);  transition:transform 600ms ease-in,opacity 400ms ease-in; 
        transition-delay: ${transitionDelay}`;
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  useEffect(() => {
    const appearOnScroll = new IntersectionObserver(callbackFunction, options);
    timeLineRef.forEach(({ ref }) => {
      appearOnScroll.observe(ref.current);
      return () => appearOnScroll.unobserve(ref.current);
    });
  }, []);

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
          <TimeLineChild
            ref={timeLine1}
            data-transitiondelay="0.4s"
            backgroundColor={"#f9bf3f"}
          >
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

          <TimeLineChild
            ref={timeLine2}
            backgroundColor={"#a84cb8"}
            data-transitiondelay="0.8s"
          >
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

          <TimeLineChild
            ref={timeLine3}
            backgroundColor={"#2fa499"}
            data-transitionDelay="1.0s"
          >
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
