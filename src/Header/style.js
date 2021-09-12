import styled from "styled-components";

const HeaderSection = styled.div`
  height: 500px;
  position: relative;
  .headerText {
    text-align: center;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: "40px";
  }
`;
const Description = styled.div`
  width: 100%;
  height: 500px;
  /* padding: 20px; */
  /* background-color: #008b8b; */
  position: relative;
  text-align: center;
  justify-content: center;
  margin-left: 20%;

  .headerText {
    text-align: center;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: "40px";
  }
`;

export { HeaderSection };
