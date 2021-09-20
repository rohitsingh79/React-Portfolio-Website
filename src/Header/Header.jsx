import React from "react";
import { HeaderSection } from "./style";
const Header = ({ forwardedRef }) => {
  return (
    <HeaderSection ref={forwardedRef}>
      <h1
        style={{
          color: "black",
          textAlign: "left",
          top: "30%",
          left: "10%",
          position: "absolute"
        }}
      >
        Hello, Viewer !
      </h1>
    </HeaderSection>
  );
};

export default Header;
