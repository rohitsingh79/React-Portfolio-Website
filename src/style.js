import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  text-align: center;
  position: absolute;
  display:flex;
  overflow-x:hidden;
`;

const HeaderSection = styled.div`
  transform: translate(320px);
  padding: 1rem;
  height: 870px;
  text-align: center;
  background-image: url("tamanna.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
  opacity: 0.8;
`;

const SvgContainer = styled.div`
  margin-top: -150px;
  left: 100px;
  text-align: center;
`;
const DescriptionContainer = styled.div`
  transform: translate(320px);
  width: 1320px;
  height: 232px;
  text-align: left;
  padding: 80px 0 80px;
`;
const ContentDivWrapper = styled.div`
  width: 100%;
  height:auto;
  margin-left:24%;

  @media (max-width: 600px), (max-width: 768px) {
    position: absolute;
    left: -330px;
    width: 100%;
    height: auto;
    padding: 0 16px;
    box-sizing: border-box;
  }
  /* @media only screen and (max-width: 600px) {
    position: absolute;
    left: -330px;
    width: 100%;
    height: auto;
    padding: 0 16px;
    box-sizing: border-box;
  } */
`;

export {
  HeaderSection,
  SvgContainer,
  DescriptionContainer,
  ContentDivWrapper,
  MainWrapper
};
