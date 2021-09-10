import { SideBar, RoundDivWrapper } from "./style";
import Image from "../../public/Image.jpeg";
import ProgressBar from "../ProgressBar/ProgressBar";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
// import MenuLinks from "./MenuLinks/MenuLinks";

const SideDrawer = () => {
  return (
    <SideBar>
      <RoundDivWrapper>
        <img
          src={Image}
          alt="Logo"
          style={{
            height: "150px",
            width: "150px",
            top: "2px",
            borderRadius: "50%"
          }}
        />
      </RoundDivWrapper>

      <h1
        style={{
          marginTop: "14%",
          fontWeight: "500",
          fontSize: "30px",
          fontFamily: "Georgia, serif",
          Width: "100%"
        }}
      >
        Rohit Pratap Singh
      </h1>
      <div
        style={{
          height: "150px",
          marginTop: "10%"
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
              padding: "10px",
              color: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <a>INTRODUCTION</a>
          </li>
          <li
            style={{
              padding: "10px",
              color: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <a>ABOUT</a>
          </li>
          <li
            style={{
              padding: "10px",
              color: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <a>TIMELINE</a>
          </li>
        </ul>
      </div>

      {/* <MenuLinks>About Me</MenuLinks> */}
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginLeft: "10px",
          color: "rgba(0, 0, 0, 0.7)",
          marginBottom: "-15px"
        }}
      >
        Html
      </div>
      <ProgressBar done={"70"} />
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginLeft: "10px",
          color: "rgba(0, 0, 0, 0.7)",
          marginBottom: "-15px"
        }}
      >
        Css
      </div>
      <ProgressBar done={"60"} />
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginLeft: "10px",
          color: "rgba(0, 0, 0, 0.7)",
          marginBottom: "-15px"
        }}
      >
        React
      </div>
      <ProgressBar done={"50"} />
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginLeft: "10px",
          color: "rgba(0, 0, 0, 0.7)",
          marginBottom: "-15px"
        }}
      >
        Javascript
      </div>
      <ProgressBar done={"90"} />

      <div style={{ marginTop: "30px" }}>
        <CircleProgressBar />
      </div>
    </SideBar>
  );
};

export default SideDrawer;
