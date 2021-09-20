import styled, { keyframes } from "styled-components";

const pulse = (y) => keyframes`
   from {
      stroke-dashoffset: 244;
    }

    to {
      stroke-dashoffset: ${y};
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
  animation: ${(props) => pulse(props.y)} 2s linear forwards;
`;

export { InnerCircle, OuterCircle };
