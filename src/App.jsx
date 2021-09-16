import React, { useRef, useEffect } from "react";
import GridBox from "./GridContainer";
import Header from "./Header";
import TimeLine from "./TimeLine/TimeLine";
import SideDrawer from "./SideBar/SideBar";
import { DivWrapper } from "./style";
import Description from "./Description";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

export default function App() {
  const IntroRef = useRef(null);
  const GridBoxRef = useRef(null);
  const TimeLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(IntroRef.current);
      const scrollPosition = window.scrollY + headerHeight + 200;

      const { offsetBottom, offsetTop } = getDimensions(GridBoxRef.current);
      console.log("Offset Top", offsetTop);
      console.log("Offest Bottom", offsetBottom);
      console.log("scrollPosition", scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <DivWrapper>
        <SideDrawer />
        <Header forwardedRef={IntroRef} />
        <Description />
        <GridBox forwardedRef={GridBoxRef} />
        <TimeLine forwardedRef={TimeLineRef} />
      </DivWrapper>
    </div>
  );
}
