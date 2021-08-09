import React, { useState } from "react";
//import Button from "@material-ui/core/Button";
// import PassImage from "../public/passport.jpeg";

import {
  Header,
  RoundDiv,
  DivWrapper,
  Description,
  GridContainer,
  SvgContainer
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
            <SvgContainer>
              <svg height="110" width="300">
                <polygon
                  points="50 3,100 28,100 75, 50 100,3 75,3 25"
                  fill="#2c98f0"
                  stroke-width="5"
                />
              </svg>
            </SvgContainer>
          </div>
          <div className="GridChild">
            <svg height="110" width="300">
              <polygon
                points="50 3,100 28,100 75, 50 100,3 75,3 25"
                fill="#f9bf3f"
                stroke-width="5"
              />
            </svg>
          </div>
          <div className="GridChild">
            <svg height="110" width="300">
              <polygon
                points="50 3,100 28,100 75, 50 100,3 75,3 25"
                fill="#2fa499 "
                stroke-width="5"
              />
            </svg>
          </div>
        </GridContainer>
      </div>
    </DivWrapper>
  );
}
