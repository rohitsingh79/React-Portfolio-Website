import styled from "styled-components";

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
    transition: left 0.5s;
    z-index: 1;
  }
  &.active {
    left: 0;
    transition: left 0.5s;
    z-index: 1;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  grid-template-rows: 120px 120px;
  grid-gap: 25px;
  margin-left: 30px;
  margin-right: 30px;
`;
const HamburgerMenu = styled.div`
  width: 30px;
  height: 2px;
  background-color: black;
  margin: 6px 0;
  &.active {
    :nth-child(1) {
      background: black;
      transform: rotate(-45deg) translate(-2px, 2px);
    }
    :nth-child(2) {
      opacity: 0;
    }
    :nth-child(3) {
      background: black;
      transform: rotate(45deg) translate(-9px, -11px);
    }
  }
`;
const AbsoluteDiv = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    position: absolute;
    left: 20px;
    transition: left 0.5s;
    top: 20px;
    z-index: 1;
    &.active {
      left: 320px;
      transition: left 0.5s;
    }
  }
`;

const ImageWrapper = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const MenuLinksWrapper = styled.div`
  min-height: 150px;
`;

const Links = styled.a`
  cursor: pointer;
`;

export {
  SideBar,
  GridContainer,
  HamburgerMenu,
  AbsoluteDiv,
  ImageWrapper,
  MenuLinksWrapper,
  Links
};
