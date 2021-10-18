import styled, { css } from "styled-components";

const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #f2f3f7;
  position: fixed;
  height: 938px;
  overflow: scroll;
  @media only screen and (max-width: 600px) {
    position: absolute;
    left: -300px;
  }
`;

const RoundDivWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: inherit;
  position: relative;
  left: 20%;
  top: 5px;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  grid-template-rows: 120px 120px;
  grid-gap: 25px;
  margin-left: 30px;
  margin-right: 30px;
`;

export { SideBar, RoundDivWrapper, GridContainer };
