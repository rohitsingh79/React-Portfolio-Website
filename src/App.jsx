import React from "react";
import GridBox from "./GridContainer";
import Header from "./Header";
import Description from "./Description";
import TimeLine from "./TimeLine";
import { DivWrapper } from "./style";

export default function App() {
  return (
    <DivWrapper>
      <div className="App">
        <Header />
        <Description />
        <GridBox />
        <TimeLine />
      </div>
    </DivWrapper>
  );
}
