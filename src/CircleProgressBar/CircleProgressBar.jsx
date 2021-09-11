const CircleProgressBar = (props) => {
  let num = props.done;
  let per = 244 - (244 * num) / 100;

  const styledCircle = {
    fill: "none",
    strokeWidth: "10",
    stroke: "#000",
    transform: "translate(5px,5px)",
    strokeDasharray: "244",
    strokeDashoffset: "244",
    strokeLinecap: "round"
  };

  const innerCircle = {
    strokeDashoffset: "0",
    stroke: "#d8d8d8"
  };
  const outerCircle = {
    strokeDashoffset: `${per}`,
    stroke: "url(#linear)"
  };

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
              <stop offset="0%" stopColor="#f2709c" />
              <stop offset="100%" stopColor="#ff9472" />
            </linearGradient>
          </defs>
          <circle
            style={{ ...styledCircle, ...innerCircle }}
            cx="40"
            cy="40"
            r="40"
          ></circle>
          <circle
            style={{ ...styledCircle, ...outerCircle }}
            cx="40"
            cy="40"
            r="40"
          ></circle>
        </svg>
        <div
          style={{
            position: "relative",
            top: "-60px",
            left: "-15px"
          }}
        >
          {props.done}%
        </div>
        <div style={{ marginTop: "-15px" }}>{props.skill} </div>
      </div>
    </>
  );
};

export default CircleProgressBar;
