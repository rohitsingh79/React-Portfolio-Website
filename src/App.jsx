import React, { useRef, useEffect, useState } from "react";
import Expertise from "./Expertise/Expertise";
import Header from "./Header/Header";
import TimeLine from "./TimeLine/TimeLine";
import SideDrawer from "./SideBar/SideBar";
import { DivWrapper } from "./style";
import Description from "./Header/Description";
import styled from "styled-components";

const ContentDivWrapper = styled.div`
  width: 1320px;
  transform: translate(330px);
  @media only screen and (max-width: 600px) {
    position: absolute;
    left: -330px;
    width: 100%;
    height: auto;
  }
`;

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
    console.log("Iam called");
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
