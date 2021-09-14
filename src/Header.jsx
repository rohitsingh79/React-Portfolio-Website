import React, { useState } from "react";
import { HeaderSection } from "./style";
const Header = () => {
  return (
    <HeaderSection>
      <div className="app-bg">
        <h1 style={{ color: "white" }}>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </HeaderSection>
  );
};

export default Header;
