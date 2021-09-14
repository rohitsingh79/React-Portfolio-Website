import styled, { keyframes } from "styled-components";

const CircleProgressBar = (props) => {
  let num = props.done;
  let per = 244 - (244 * num) / 100;

  const pulse = keyframes`
  from {
    stroke-dashoffset: 244;
  }

  to {
    stroke-dashoffset: ${per};
  }
`;

  const InnerCircle = styled.circle`
    fill: none;
    stroke-width: 10;
    stroke: #d8d8d8;
    transform: translate(5px, 5px);
    stroke-dasharray: 247;
    stroke-linecap: round;
  `;
  const OuterCircle = styled.circle`
    fill: none;
    stroke-width: 10;
    transform: translate(5px, 5px);
    stroke-dasharray: 247;
    stroke-linecap: round;
    stroke: url(#linear);
    animation: ${pulse} 2s linear forwards;
  `;

  // const styledCircle = {
  //   fill: "none",
  //   strokeWidth: "10",
  //   stroke: "#000",
  //   transform: "translate(5px,5px)",
  //   strokeDasharray: "244",
  //   strokeDashoffset: "244",
  //   strokeLinecap: "round"
  // };

  // const innerCircle = {
  //   strokeDashoffset: "0",
  //   stroke: "#d8d8d8"
  // };
  // const outerCircle = {
  //   strokeDashoffset: `${per}`,
  //   stroke: "url(#linear)",
  //   animation: "1s ease 0.3s"
  // };

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

          <OuterCircle cx="40" cy="40" r="40"></OuterCircle>
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
