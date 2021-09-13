import styled from "styled-components";

const DivWrapper = styled.div`
  width: 1320px;
  height: 200%;
  text-align: center;
  background-color: #fff;
  position: absolute;
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 500px;
  background-color: #008b8b;
  position: relative;
  text-align: center;
  justify-content: center;
  margin-left: 24%;

  .headerText {
    text-align: center;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: "40px";
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 414px 414px 414px;
  grid-gap: 30px;
  margin-top: 10%;
  margin-left: 25%;

  .GridChild {
    background-color: #fff;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
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

export { HeaderSection, DivWrapper, GridContainer, SvgContainer };
