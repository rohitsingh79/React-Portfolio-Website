import styled from "styled-components";

const HeaderSection = styled.div`
  transform: translate(320px);
  padding: 1rem;
  height: 800px;
  text-align: center;
  background-image: url("tamanna.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
  opacity: 0.8;
`;
const DescriptionContainer = styled.div`
  opacity: 0;
  transform: translate(300px);
  width: 1320px;
  height: 232px;
  text-align: left;
  padding: 80px 0 80px;
`;

export { HeaderSection, DescriptionContainer };
