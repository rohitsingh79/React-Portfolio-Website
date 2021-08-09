import styled, { css } from "styled-components";

const DivWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  background-color: gray;
`;

const Header = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-color: #008b8b;
  position: relative;
  text-align: center;
  justify-content: center;

  .headerText {
    text-align: center;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const RoundDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: MediumSeaGreen;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 42%;
  padding-top: ${(props) => props.topPadding}px;

  ${({ hoverState }) =>
    hoverState === true
      ? css`
          background-color: blue;
        `
      : css`
      background-color:cyan: ;
      `};
`;

const Description = styled.div`
  margin-top: 120px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
  background-color: #2196f3;
  padding: 50px;
  margin-top: 10%;
  .GridChild {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 100px 20px;
    font-size: 30px;
  }
`;

export { Header, RoundDiv, DivWrapper, Description, GridContainer };
