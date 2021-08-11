import React, { useState } from "react";
//import Button from "@material-ui/core/Button";
// import PassImage from "../public/passport.jpeg";
import SvgContainer from "./SvgContainer";

import {
  Header,
  RoundDiv,
  DivWrapper,
  Description,
  GridContainer
} from "./style";

export default function App() {
  const [hoverState, setHoverState] = useState(false);
  console.log("hello");
  return (
    <DivWrapper>
      <div className="App">
        <Header className="headerText">
          <RoundDiv
            hoverState={hoverState}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
          >
            {/* <img
          src={PassImage}
        /> */}
          </RoundDiv>
        </Header>
        <Description>
          ROHIT PRATAP SINGH
          <br />
          SOFTWARE ENGINEER @ LOWES
        </Description>
        <GridContainer>
          <div className="GridChild">
            <SvgContainer color="#2c98f0" />
            <div>
              <p>Web Development</p>
            </div>
          </div>
          <div className="GridChild">
            <SvgContainer color="#f9bf3f" />
          </div>
          <div className="GridChild">
            <SvgContainer color="#2fa499" />
          </div>
        </GridContainer>
      </div>
    </DivWrapper>
  );
}
