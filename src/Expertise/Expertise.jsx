import React, { useRef, useEffect } from "react";
import SvgContainer from "./SvgContainer";
import { GridContainer } from "./style";
import styled from "styled-components";

const SvgIconContainer = styled.div`
  top: -8%;
  position: absolute;
  left: 49%;
`;

const Expertise = ({ forwardedRef }) => {
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);
  const childRef3 = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  const childRefs = [
    { section: "child1", ref: childRef1 },
    { section: "child2", ref: childRef2 },
    { section: "child3", ref: childRef3 }
  ];

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { transitionDelay, borderBottom } = entry.target.style;
        entry.target.style.cssText = `opacity:1 ; 
        transform: translateY(10px);  transition:transform 600ms ease-in,opacity 
        400ms ease-in; transition-delay: ${transitionDelay};
        border-bottom:${borderBottom};
        `;
      }
    });
  };

  useEffect(() => {
    const appearOnScroll = new IntersectionObserver(callbackFunction, options);
    childRefs.forEach(({ ref }) => {
      appearOnScroll.observe(ref.current);
      return () => appearOnScroll.unobserve(ref.current);
    });
  }, []);

  return (
    <div
      ref={forwardedRef}
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

      <GridContainer>
        <div
          ref={childRef1}
          className="GridChild"
          style={{
            borderBottom: "2px solid #2c98f0",
            transitionDelay: "0.4s",
            opacity: 0
          }}
        >
          <SvgContainer color="#2c98f0" />
          <SvgIconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-lightbulb"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
            </svg>
          </SvgIconContainer>
          <div>
            <h3>Web Development</h3>
            <p>
              I have experience building websites and chrome extentions using
              JavaScript,React,HTML,CSS
            </p>
          </div>
        </div>
        <div
          ref={childRef2}
          className="GridChild"
          style={{
            borderBottom: "2px solid #f9bf3f",
            transitionDelay: "0.8s",
            opacity: 0
          }}
        >
          <SvgContainer color="#f9bf3f" />
          <SvgIconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-lightbulb"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
            </svg>
          </SvgIconContainer>
          <div>
            <h3>Automation Testing</h3>
            <p>
              I have experience building websites and chrome extentions using
              JavaScipt
            </p>
          </div>
        </div>
        <div
          ref={childRef3}
          className="GridChild"
          style={{
            borderBottom: "2px solid #2fa499",
            transitionDelay: "1.0s",
            opacity: 0
          }}
        >
          <SvgContainer color="#2fa499"></SvgContainer>
          <SvgIconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-lightbulb"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
            </svg>
          </SvgIconContainer>
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

export default Expertise;
