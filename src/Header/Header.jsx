import React from "react";
import { HeaderSection } from "./style";
import logo from "../../public/dose.jpg";
import Description from "./Description";
const Header = () => {
  return (
    <>
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "500px",
          width: "1320px",
          position: "absolute",
          display: "block",
          "text-align": "center",
          "margin-left": "25%"
        }}
      />
    </>
  );
};

export default Header;
