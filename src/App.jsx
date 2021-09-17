import React, { useRef, useEffect, useState } from "react";
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
  const [visibleSection, setVisibleSection] = useState();

  const IntroRef = useRef(null);
  const AboutRef = useRef(null);
  const ExpertiseRef = useRef(null);
  const TimeLineRef = useRef(null);

  const sectionRefs = [
    { section: "Introduction", ref: IntroRef },
    { section: "About", ref: AboutRef },
    { section: "Expertise", ref: ExpertiseRef },
    { section: "TimeLine", ref: TimeLineRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <DivWrapper>
        <SideDrawer
          visibleSection={visibleSection}
          IntroRef={IntroRef.current}
          AboutRef={AboutRef.current}
          ExpertiseRef={ExpertiseRef.current}
          TimeLineRef={TimeLineRef.current}
        />
        <Header forwardedRef={IntroRef} />
        <Description forwardedRef={AboutRef} />
        <GridBox forwardedRef={ExpertiseRef} />
        <TimeLine forwardedRef={TimeLineRef} />
      </DivWrapper>
    </div>
  );
}
