import React from "react";
import GridBox from "./GridContainer";
import Header from "./Header";
import TimeLine from "./TimeLine/TimeLine";
import SideDrawer from "./SideBar/SideBar";
import { DivWrapper } from "./style";

export default function App() {
  return (
    <DivWrapper>
      <SideDrawer />
      <div className="App">
        <Header />
        <GridBox />
        <TimeLine />
      </div>
    </DivWrapper>
  );
}
