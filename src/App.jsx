import React from "react";
import GridBox from "./GridContainer";
import Header from "./Header";
import Description from "./Description";

import { DivWrapper } from "./style";

export default function App() {
  return (
    <DivWrapper>
      <div className="App">
        <Header />
        <Description />
        <GridBox />
      </div>
    </DivWrapper>
  );
}
