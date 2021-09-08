import styled, { css } from "styled-components";

const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #f2f3f7;
  position: fixed;
  height: 938px;
  overflow: scroll;
`;

const RoundDivWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: inherit;
  position: relative;
  left: 20%;
  top: 2%;
  z-index: 1;
`;

export { SideBar, RoundDivWrapper };
