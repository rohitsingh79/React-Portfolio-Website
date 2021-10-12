import { SideBar, RoundDivWrapper, GridContainer } from "./style";
import Image from "../../public/Rohit.jpg";
import ProgressBar from "./ProgressBar/ProgressBar/ProgressBar";
import CircleProgressBar from "./ProgressBar/CircleProgressBar/CircleProgressBar";
import styled from "styled-components";

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
  const { visibleSection } = props;
  // const scrollTo = (ele) => {
  //   console.log("inside scroll to");
  //   console.log(ele);
  //   ele.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start"
  //   });
  // };
  return (
    <SideBar>
      <RoundDivWrapper>
        <img
          src={Image}
          alt="Logo"
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "50%"
          }}
        />
      </RoundDivWrapper>

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
      <div
        style={{
          height: "150px",
          marginTop: "10%",
          marginBottom: "20%"
        }}
      >
        <MenuListWrapper>
          <MenuList
            color={
              visibleSection === "Introduction"
                ? "#2c98f0"
                : "rgba(0, 0, 0, 0.7)"
            }
            textColor={visibleSection === "Introduction" ? "underline" : "none"}
          >
            <a>INTRODUCTION</a>
          </MenuList>
          <MenuList
            color={visibleSection === "About" ? "#2c98f0" : "rgba(0,0,0,0.7)"}
            textColor={visibleSection === "About" ? "underline" : "none"}
          >
            <a>ABOUT</a>
          </MenuList>
          <MenuList
            color={
              visibleSection === "Expertise" ? "#2c98f0" : "rgba(0,0,0,0.7)"
            }
            textColor={visibleSection === "Expertise" ? "underline" : "none"}
          >
            <a>EXPERTISE</a>
          </MenuList>
          <MenuList
            color={
              visibleSection === "TimeLine" ? "#2c98f0" : "rgba(0,0,0,0.7)"
            }
            textColor={visibleSection === "TimeLine" ? "underline" : "none"}
          >
            <a>TIMELINE</a>
          </MenuList>
        </MenuListWrapper>
      </div>

      {/* <MenuLinks>About Me</MenuLinks> */}
      <div style={{ position: "relative", top: "-60px" }}>
        <hr
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px"
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
      </div>
      <div style={{ position: "relative", top: "-50px" }}>
        <GridContainer>
          <CircleProgressBar done={"85"} skill={"Communication"} />
          <CircleProgressBar done={"70"} skill={"Problen Solving"} />
          <CircleProgressBar done={"80"} skill={"Team Work"} />
          <CircleProgressBar done={"85"} skill={"Flexibility"} />
        </GridContainer>
      </div>
    </SideBar>
  );
};

export default SideDrawer;
