import styled, { css } from "styled-components";

const DivWrapper = styled.div`
  width: 100%;
  height: 300%;
  text-align: center;
  background-color: #fff;
  position: absolute;
`;

const HeaderSection = styled.div`
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

const DescriptionSection = styled.div`
  margin-top: 120px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
  padding: 50px;
  margin-top: 10%;
  .GridChild {
    width: 500px;
    height: 50px;
    background-color: #fff;
    padding: 120px 20px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #2c98f0;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
  }
`;

const SvgContainer = styled.div`
  margin-top: -150px;
  left: 100px;
  text-align: center;
`;

export {
  HeaderSection,
  RoundDiv,
  DivWrapper,
  DescriptionSection,
  GridContainer,
  SvgContainer
};
