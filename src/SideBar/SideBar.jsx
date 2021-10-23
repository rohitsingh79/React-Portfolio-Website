import {
  SideBar,
  GridContainer,
  HamburgerMenu,
  AbsoluteDiv,
  ImageWrapper,
  MenuLinksWrapper,
  Links
} from "./style";
import Image from "../../public/Rohit.jpg";
import ProgressBar from "./ProgressBar/ProgressBar/ProgressBar";
import CircleProgressBar from "./ProgressBar/CircleProgressBar/CircleProgressBar";
import styled from "styled-components";
import { useState, useEffect } from "react";

const MenuListWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const MenuList = styled.li`
  margin-bottom: 15px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textColor};
`;

const SideDrawer = (props) => {
  const styledSkill = {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    marginLeft: "30px",
    color: "rgba(0, 0, 0, 0.7)",
    marginBottom: "-15px",
    "font-family": "'Roboto', sans-serif",
    "font-size": "15px"
  };

  const [state, setState] = useState("");
  const [menuLink, setMenuLinks] = useState(true);

  const ToggleHamburgerMenu = () => {
    setState(state === "active" ? "" : "active");
    setMenuLinks(menuLink === true ? false : true);
  };

  const {
    visibleSection,
    IntroRef,
    AboutRef,
    ExpertiseRef,
    TimeLineRef
  } = props;

  const executeScroll = (ele) =>
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  useEffect(() => {
    const handleScroll = () => {
      setState("");
      setMenuLinks(true);
    };

    if (state === "active") {
      console.log("yes active");
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [state]);

  return (
    <div>
      <SideBar className={`${state}`}>
        <ImageWrapper src={Image} alt="Logo" />
        <h1
          style={{
            fontWeight: "500",
            fontSize: "30px",
            "font-family": "'Roboto', sans-serif",
            Width: "100%"
          }}
        >
          Rohit Pratap Singh
        </h1>
        {menuLink && (
          <MenuLinksWrapper>
            <MenuListWrapper>
              <MenuList
                color={
                  visibleSection === "Introduction"
                    ? "#2c98f0"
                    : "rgba(0, 0, 0, 0.7)"
                }
                textColor={
                  visibleSection === "Introduction" ? "underline" : "none"
                }
              >
                <Links onClick={(event) => executeScroll(IntroRef.current)}>
                  INTRODUCTION
                </Links>
              </MenuList>
              <MenuList
                color={
                  visibleSection === "About" ? "#2c98f0" : "rgba(0,0,0,0.7)"
                }
                textColor={visibleSection === "About" ? "underline" : "none"}
              >
                <Links onClick={() => executeScroll(AboutRef.current)}>
                  ABOUT ME
                </Links>
              </MenuList>
              <MenuList
                color={
                  visibleSection === "Expertise" ? "#2c98f0" : "rgba(0,0,0,0.7)"
                }
                textColor={
                  visibleSection === "Expertise" ? "underline" : "none"
                }
              >
                <Links onClick={() => executeScroll(ExpertiseRef.current)}>
                  EXPERTISE
                </Links>
              </MenuList>
              <MenuList
                color={
                  visibleSection === "TimeLine" ? "#2c98f0" : "rgba(0,0,0,0.7)"
                }
                textColor={visibleSection === "TimeLine" ? "underline" : "none"}
              >
                <Links onClick={() => executeScroll(TimeLineRef.current)}>
                  TIMELINE
                </Links>
              </MenuList>
            </MenuListWrapper>
          </MenuLinksWrapper>
        )}

        <hr
          style={{
            marginLeft: "20px",
            marginRight: "20px"
          }}
        />
        <div style={styledSkill}>Html</div>
        <ProgressBar done={"80"} />
        <div style={styledSkill}>Css</div>
        <ProgressBar done={"85"} />
        <div style={styledSkill}>React</div>
        <ProgressBar done={"75"} />
        <div style={styledSkill}>Javascript</div>
        <ProgressBar done={"70"} />
        <hr style={{ margin: "20px 20px 10px 20px " }} />
        <GridContainer>
          <CircleProgressBar done={"85"} skill={"Communication"} />
          <CircleProgressBar done={"70"} skill={"Problen Solving"} />
          <CircleProgressBar done={"80"} skill={"Team Work"} />
          <CircleProgressBar done={"85"} skill={"Flexibility"} />
        </GridContainer>
      </SideBar>
      <AbsoluteDiv onClick={ToggleHamburgerMenu} className={`${state}`}>
        <HamburgerMenu className={`${state}`} />
        <HamburgerMenu className={`${state}`} />
        <HamburgerMenu className={`${state}`} />
      </AbsoluteDiv>
    </div>
  );
};

export default SideDrawer;
