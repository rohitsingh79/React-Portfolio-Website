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

const RoundDiv = styled.div`
  width: 150px;
  height: 150px;
  background-color: MediumSeaGreen;
  border-radius: 50%;
  position: absolute;
  top: 2%;
  left: 20%;
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

export { SideBar, RoundDiv };
