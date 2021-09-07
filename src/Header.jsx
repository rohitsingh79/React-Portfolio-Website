import React, { useState } from "react";
import { HeaderSection } from "./style";
import logo from "../public/georgie.jpg";

const Header = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <HeaderSection className="headerText">
      {/* <div
        style={{
          position: "absolute",
          top: "40px",
          left: "300px",
          "z-index": "1",
          "font-size": "70px"
        }}
      >
        Hello, Iam..
        <br></br>
        Rohit Pratap Singh
      </div> */}
      {/* <img
        src={logo}
        alt="Logo"
        style={{ height: "800px", right: "-2px", position: "absolute" }}
      /> */}
    </HeaderSection>
  );
};

export default Header;
