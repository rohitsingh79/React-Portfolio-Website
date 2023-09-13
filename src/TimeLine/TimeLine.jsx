import React, { useRef, useEffect } from "react";
import SvgIcon from "./SvgIcon";
import styled from "styled-components";

import {
  TimeLineWrapper,
  ColumnContainer,
  TimeLineBar,
  TimeLineChild
} from "./style";

const TimeLinePara = styled.p`
  padding-left: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8;
`;

const TimeLineHeading = styled.h2`
  padding-left: 20px;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  margin: 20px 0 30px 0;
`;

const TimeLineYear = styled.span`
  margin-left: 20px;
  font-size: 15px;
  color: rgb(153, 153, 153);
  font-family: Quicksand, Arial, sans-serif;
  opacity: 0.4;
`;

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
        let transitionDelay = entry.target.dataset.transitiondelay;
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
        marginTop: "100px",
        padding: "2em 20px",
        width: "auto"
      }}
    >
      <div
        style={{
          width: "auto",
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
            <TimeLineHeading>
              Software Engineer at Lowe's
              <TimeLineYear>2018-present</TimeLineYear>
            </TimeLineHeading>

            <TimeLinePara>
              Working as a software engineer at Lowes (fortune 50 company) with roles and responsibilities
              Revolving around front end development using react js , redux , javascript , html css  , node js
              Creating a shoppable experience for the customers online  by designing new features on the  collection detail , product detail and helping lowes drive revenue from digital side. Also working with peers to drive solution to problems and also grooming the new joiners.
            </TimeLinePara>
          </TimeLineChild>

          <TimeLineChild
            ref={timeLine2}
            backgroundColor={"rgb(44, 152, 240)"}
            data-transitiondelay="0.8s"
          >
            <SvgIcon />
            <TimeLineHeading>
              Undergraduation from CMRIT
              <TimeLineYear>2014-2018</TimeLineYear>
            </TimeLineHeading>
            <TimeLinePara>
              I completed my graduation studies in Information Science and technology and I have taken courses like DSA, OOPs, Computer Networks, system design.I was a student of CMR Institute of Technology Bengaluru and secured an overall percentage of 76.5% , also making me the department topper among boys and third overall.
            </TimeLinePara>
          </TimeLineChild>
          <TimeLineChild
            ref={timeLine3}
            backgroundColor={"#2fa499"}
            data-transitionDelay="1.0s"
          >
            <SvgIcon />
            <TimeLineHeading>
              Primary and Higher Education
              <TimeLineYear>2002-2014</TimeLineYear>
            </TimeLineHeading>
            <TimeLinePara>
              I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths from Kendriya Vidyalaya no 2 Jalahalli East with 85 merit. I took computer science in my 11th and 12th ,where I got to study more about computer  and coding languages like c , c++.

            </TimeLinePara>
          </TimeLineChild>
        </TimeLineWrapper>
      </ColumnContainer>
    </div>
  );
};

export default TimeLine;
