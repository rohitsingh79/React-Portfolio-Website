import React, { useEffect } from "react";
import { DescriptionContainer } from "./style";
const Description = ({ forwardedRef }) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.cssText =
          "opacity:1 ; transition: opacity 800ms linear ; transform: translateX(0px);  transition:transform 500ms linear;";
      }
    });
  };

  useEffect(() => {
    const appearOnScroll = new IntersectionObserver(callbackFunction, options);
    const ele = forwardedRef.current;
    if (ele) appearOnScroll.observe(ele);
    return () => {
      appearOnScroll.unobserve(ele);
    };
  }, []);

  return (
    <DescriptionContainer ref={forwardedRef}>
      <div
        style={{
          color: "#999999",
          margin: "0 0 15px",
          "letter-spacing": "5px"
        }}
      >
        ABOUT ME
      </div>
      <h3
        style={{
          marginBottom: "30px",
          "font-family": "'Roboto', sans-serif",
          "font-weight": "700",
          "text-transform": "uppercase",
          "letter-spacing": "5px",
          "font-size": "18px"
        }}
      >
        Who Iam I?
      </h3>
      <p
        style={{
          color: "rgba(0, 0, 0, 0.7)",
          lineHeight: "30px",
          marginBottom: "22.5px",
          "font-family": "'Roboto', sans-serif",
          "font-size": "15px"
        }}
      >
        Iam a software engineer at Lowe's (fortune 50 company) with my work revolving around
        creating a shoppable experience for the lowe's customers online mainly by doing single page migration to  react,
        new feature development on SBR (Shop by room ) , CDP and PD pages
      </p>
      <p
        style={{
          color: "rgba(0, 0, 0, 0.7)",
          lineHeight: "30px",
          marginBottom: "22.5px",
          "font-family": "'Roboto', sans-serif",
          "font-size": "15px"
        }}
      >
        I am a computer grad student from CMR Insitute of Technology with subjects  DS , OOPS , OS , DBMS . I love exploring new technologies , grooming and mentoring juniors  solving problems, Competitive coding. 
      </p>
    </DescriptionContainer>
  );
};

export default Description;
