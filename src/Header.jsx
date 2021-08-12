import React, { useState } from "react";
import { RoundDiv, HeaderSection } from "./style";

const Header = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <HeaderSection className="headerText">
      <RoundDiv
        hoverState={hoverState}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        {/* <img
    src={PassImage}
  /> */}
      </RoundDiv>
    </HeaderSection>
  );
};

export default Header;
