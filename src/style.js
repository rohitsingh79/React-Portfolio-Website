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
  height: 800px;
  padding: 20px;
  /* background-color: #008b8b; */
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
  top: 80%;
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
  grid-gap: 35px;
  padding-left: 50px;
  margin-top: 10%;
  width: auto;
  /* background-color: #2196F3; */
  .GridChild {
    background-color: #fff;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
    width: 415px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SvgContainer = styled.div`
  margin-top: -150px;
  left: 100px;
  text-align: center;
`;
// const TimeLineWrapper = styled.div`
//   display: grid;
//   margin-top: 100px;
//   grid-template-rows: 150px 150px;
//   grid-gap: 10px;
//   padding: 40px;

//   .TimelineChild {
//     background-color: rgba(255, 255, 255, 0.8);
//     text-align: left;
//     font-size: 15px;
//     background-color: #f2f3f7;
//     width: 1250px;
//   }
// `;

export {
  HeaderSection,
  RoundDiv,
  DivWrapper,
  DescriptionSection,
  GridContainer,
  SvgContainer
  // TimeLineWrapper
};
