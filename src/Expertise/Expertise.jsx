import React, { useRef, useEffect } from "react";
import SvgContainer from "./SvgContainer";
import { GridContainer } from "./style";

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
        const { transitionDelay } = entry.target.style;
        entry.target.style.cssText = `opacity:1 ; 
        transform: translateY(10px);  transition:transform 600ms ease-in,opacity 400ms ease-in; transition-delay: ${transitionDelay}`;
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

export default Expertise;
