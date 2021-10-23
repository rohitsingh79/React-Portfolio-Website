import React, { useRef, useEffect, useState } from "react";
import Expertise from "./Expertise/Expertise";
import Header from "./Header/Header";
import TimeLine from "./TimeLine/TimeLine";
import SideDrawer from "./SideBar/SideBar";
import { DivWrapper, ContentDivWrapper } from "./style";
import Description from "./Header/Description";

const getDimensions = (ele, section) => {
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
      console.log("window.scrollY without addition:", scrollPosition);
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        const { offsetBottom, offsetTop } = getDimensions(ele, section);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
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
          IntroRef={IntroRef}
          AboutRef={AboutRef}
          ExpertiseRef={ExpertiseRef}
          TimeLineRef={TimeLineRef}
        />
        <ContentDivWrapper>
          <Header forwardedRef={IntroRef} />
          <Description forwardedRef={AboutRef} />
          <Expertise forwardedRef={ExpertiseRef} />
          <TimeLine forwardedRef={TimeLineRef} />
        </ContentDivWrapper>
      </DivWrapper>
    </div>
  );
}
