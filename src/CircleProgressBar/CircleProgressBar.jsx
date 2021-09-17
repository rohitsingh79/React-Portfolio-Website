import { useEffect, useState } from "react";
import { InnerCircle, OuterCircle } from "./style";

const CircleProgressBar = (props) => {
  const [per, setColor] = useState({});

  useEffect(() => {
    setTimeout(() => {
      let num = props.done;
      setColor(244 - (244 * num) / 100);
    }, 500);
  }, []);

  const styledSvg = {
    height: "100px",
    width: "100px"
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <svg style={styledSvg}>
          <defs>
            <linearGradient id={"linear"} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2709c" animation="1s ease 0.3s" />
              <stop offset="100%" stopColor="#ff9472" />
            </linearGradient>
          </defs>
          <InnerCircle cx="40" cy="40" r="40"></InnerCircle>

          <OuterCircle cx="40" cy="40" r="40" y={per}></OuterCircle>
        </svg>
        <div
          style={{
            position: "relative",
            top: "-55px",
            left: "-15px",
            "font-family": "'Roboto', sans-serif",
            "font-size": "15x",
            color: "rgba(0, 0, 0, 0.7)"
          }}
        >
          {props.done}%
        </div>
        <div
          style={{
            marginTop: "-10px",
            "font-family": "'Roboto', sans-serif",
            "font-size": "15x",
            color: "rgba(0, 0, 0, 0.7)",
            transform: "translate(-10px)"
          }}
        >
          {props.skill}
        </div>
      </div>
    </>
  );
};

export default CircleProgressBar;
