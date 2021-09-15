import React from "react";
import { HeaderSection } from "./style";
const Header = ({ forwardedRef }) => {
  return (
    <HeaderSection ref={forwardedRef}>
      <h1 style={{ color: "white" }}>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </HeaderSection>
  );
};

export default Header;
