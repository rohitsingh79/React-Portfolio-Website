import React, { useState } from "react";
import { HeaderSection } from "./style";
import logo from "../public/Hero.jpg";
const Header = () => {
  return (
    <HeaderSection>
      <div
        className="app-bg"
        style={{
          "--img":
            "url('https://images.unsplash.com/photo-1610907083431-d36d8947c8e2')"
        }}
      >
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </HeaderSection>
  );
};

export default Header;
