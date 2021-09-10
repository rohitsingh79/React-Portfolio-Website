import { Circle } from "./style";

const CircleProgressBar = ({ done }) => {
  let gradientId = "gradientId";

  const newStyle = {
    width: "150px",
    height: "150px",
    fill: "none",
    strokeWidth: "10",
    stroke: "#000",
    transform: "translate(5px,5px)",
    strokeDasharray: "440",
    strokeDashoffset: "22",
    strokeLinecap: "round"
  };

  const innerCircle = {
    strokeDashoffset: "0",
    stroke: "#d8d8d8"
  };
  const outerCircle = {
    strokeDashoffset: "calc(440 - (440 * 87) / 100)",
    stroke: "url(#linear)"
  };

  return (
    <svg>
      <defs>
        <linearGradient id={"linear"} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2709c" />
          <stop offset="100%" stopColor="#ff9472" />
        </linearGradient>
      </defs>
      <circle
        style={{ ...newStyle, ...innerCircle }}
        cx="70"
        cy="70"
        r="70"
      ></circle>
      <circle
        style={{ ...newStyle, ...outerCircle }}
        cx="70"
        cy="70"
        r="70"
      ></circle>
    </svg>
  );
};

export default CircleProgressBar;
