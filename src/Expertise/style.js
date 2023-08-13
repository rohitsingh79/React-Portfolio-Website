import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  padding-top: 2rem;

  @media (max-width: 600px), (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 200px 200px 200px;
    grid-gap: 100px;
  }
  /* @media only screen and (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: 200px 200px 200px;
    grid-gap: 100px;
  } */

  .GridChild {
    background-color: #fff;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    transform: translateY(40px);
  }
`;

const GridChild = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
  height: 230px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HexagonMainWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -22%;
`;

const SvgIconMainWrapper = styled.div`
  position: relative;
  top: -70%;
`;

const ContentWrapper = styled.div``;

export {
  GridContainer,
  GridChild,
  HexagonMainWrapper,
  SvgIconMainWrapper,
  ContentWrapper
};
