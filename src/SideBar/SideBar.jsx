import { SideBar, RoundDivWrapper, GridContainer } from "./style";
import Image from "../../public/Rohit.jpg";
import ProgressBar from "./ProgressBar/ProgressBar/ProgressBar";
import CircleProgressBar from "./ProgressBar/CircleProgressBar/CircleProgressBar";

const SideDrawer = (props) => {
  const { IntroRef } = props;

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
  const scrollTo = (ele) => {
    console.log("inside scroll to");
    console.log(ele);
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
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
          marginBottom: "5%"
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: "0"
          }}
        >
          <li
            style={{
              "margin-bottom": "10px",
              color:
                visibleSection === "Introduction"
                  ? "#2c98f0"
                  : "rgba(0, 0, 0, 0.7)",
              "text-decoration":
                visibleSection === "Introduction" ? "underline" : "none"
            }}
          >
            <a>INTRODUCTION</a>
          </li>
          <li
            style={{
              "margin-bottom": "10px",
              color:
                visibleSection === "About" ? "#2c98f0" : "rgba(0, 0, 0, 0.7)",
              "text-decoration":
                visibleSection === "About" ? "underline" : "none"
            }}
          >
            <a>ABOUT</a>
          </li>
          <li
            style={{
              "margin-bottom": "10px",
              color:
                visibleSection === "Expertise"
                  ? "#2c98f0"
                  : "rgba(0, 0, 0, 0.7)",
              "text-decoration":
                visibleSection === "Expertise" ? "underline" : "none"
            }}
          >
            <a>EXPERTISE</a>
          </li>
          <li
            style={{
              "margin-bottom": "10px",
              color:
                visibleSection === "TimeLine"
                  ? "#2c98f0"
                  : "rgba(0, 0, 0, 0.7)",
              "text-decoration":
                visibleSection === "TimeLine" ? "underline" : "none"
            }}
          >
            <a>TIMELINE</a>
          </li>
        </ul>
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
        <ProgressBar done={"90"} />
        <div style={styledSkill}>Css</div>
        <ProgressBar done={"60"} />
        <div style={styledSkill}>React</div>
        <ProgressBar done={"50"} />
        <div style={styledSkill}>Javascript</div>
        <ProgressBar done={"90"} />
        <hr style={{ margin: "20px 20px 10px 20px " }} />
      </div>
      <div style={{ position: "relative", top: "-50px" }}>
        <GridContainer>
          <CircleProgressBar done={"80"} skill={"Communication"} />
          <CircleProgressBar done={"70"} skill={"Problen Solving"} />
          <CircleProgressBar done={"90"} skill={"Team Work"} />
          <CircleProgressBar done={"85"} skill={"Flexibility"} />
        </GridContainer>
      </div>
    </SideBar>
  );
};

export default SideDrawer;
