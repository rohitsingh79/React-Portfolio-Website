import { GridContainer } from "./style";

const CircleProgressBar = ({ done }) => {
  let num = done;
  console.log(num);
  let per = 200 - (200 * num) / 100;
  console.log(per);

  console.log(per);
  const newStyle = {
    fill: "none",
    strokeWidth: "10",
    stroke: "#000",
    transform: "translate(5px,5px)",
    strokeDasharray: "200",
    strokeDashoffset: "200",
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

  return (
    <>
      <GridContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <svg style={{ height: "70px", width: "70px" }}>
            <defs>
              <linearGradient id={"linear"} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f2709c" />
                <stop offset="100%" stopColor="#ff9472" />
              </linearGradient>
            </defs>
            <circle
              style={{ ...newStyle, ...innerCircle }}
              cx="30"
              cy="30"
              r="30"
            ></circle>
            <circle
              style={{ ...newStyle, ...outerCircle }}
              cx="30"
              cy="30"
              r="30"
            ></circle>
          </svg>
          <div style={{ marginTop: "10px" }}>Communication </div>
        </div>
        <svg style={{ height: "70px", width: "70px" }}>
          <defs>
            <linearGradient id={"linear"} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2709c" />
              <stop offset="100%" stopColor="#ff9472" />
            </linearGradient>
          </defs>
          <circle
            style={{ ...newStyle, ...innerCircle }}
            cx="30"
            cy="30"
            r="30"
          ></circle>
          <circle
            style={{ ...newStyle, ...outerCircle }}
            cx="30"
            cy="30"
            r="30"
          ></circle>
        </svg>

        <svg style={{ height: "70px", width: "70px" }}>
          <defs>
            <linearGradient id={"linear"} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2709c" />
              <stop offset="100%" stopColor="#ff9472" />
            </linearGradient>
          </defs>
          <circle
            style={{ ...newStyle, ...innerCircle }}
            cx="30"
            cy="30"
            r="30"
          ></circle>
          <circle
            style={{ ...newStyle, ...outerCircle }}
            cx="30"
            cy="30"
            r="30"
          ></circle>
        </svg>
      </GridContainer>
    </>
  );
};

export default CircleProgressBar;
