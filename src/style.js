import styled from "styled-components";

const DivWrapper = styled.div`
  width: 1320px;
  height: 200%;
  text-align: center;
  background-color: #fff;
  position: absolute;
`;

const HeaderSection = styled.div`
  transform: translate(320px);
  padding: 1rem;
  height: 500px;
  text-align: center;
  background-image: url("tamanna.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 411px 411px 411px;
  grid-gap: 30px;
  padding-top: 2rem;
  /* margin-top: 300px; */
  /* transform: translate(320px); */

  .GridChild {
    background-color: #fff;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
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
  padding: 30px 0 80px;
`;

export {
  HeaderSection,
  DivWrapper,
  GridContainer,
  SvgContainer,
  DescriptionContainer
};
