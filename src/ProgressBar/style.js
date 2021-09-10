import styled, { css } from "styled-components";

const ProgressContainer = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 10px;
  width: 240px;
  margin-left: 10px;
  .progress-done {
    background: linear-gradient(to left, #f2709c, #ff9472);
    box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
    border-radius: 20px;
    height: 100%;
    width: 0;
    transition: 1s ease 0.3s;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 30px;
  grid-gap: 22px;
`;

export { ProgressContainer, GridContainer };
