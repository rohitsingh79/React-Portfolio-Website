import React from "react";
import { DescriptionContainer } from "./style";
const Description = () => {
  return (
    <DescriptionContainer>
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
        I am a computer grad student from DAIICT-Gandhinagar with ICT as my
        major. I love exploring new technologies and often amazed by the
        progress we as a human species have mad so far in the recent years
        (apart from the headphone-jack part!!)
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
        I have started reflecting my ideas and thougths through the medium of
        words recently so spelling and grammer mistaks are very often.You can
        write me back if you spot any and don't want to live anymore :P
      </p>
    </DescriptionContainer>
  );
};

export default Description;
