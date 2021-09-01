import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: grid;
  margin-top: 100px;
  margin-left: 40px;
  grid-template-columns: 5px 1250px;
  grid-gap: 30px;
  padding: 40px;
  height: 450px;
`;

const TimeLineBar = styled.div`
  background-color: #f2f3f7;
`;

const TimeLineWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;

  .TimeLineChild {
    text-align: left;
    font-size: 15px;
    background-color: #f2f3f7;
    position: relative;
    height: 200px;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: white;
      border: 4px solid #ff9f55;
      border-radius: 50%;
      z-index: 1;
      left: -48px;
    }

    &::after {
      content: "";
      height: 0;
      position: absolute;
      top: 5px;
      width: 0;
      z-index: 1;
      left: -8px;
      border: medium solid #f2f3f7;
      border-width: 10px 10px 10px 0;
      border-color: transparent #f2f3f7 transparent transparent;
    }
  }
`;

// const PseudoCheck = styled.div`
//   background-color: grey;
//   left: -20px;
//   &::after {
//     content: "";
//     position: absolute;
//     top: 22px;
//     width: 0;
//     z-index: 1;
//     border: medium solid white;
//     border-width: 10px 0 10px 10px;
//     border-color: transparent transparent transparent grey;
//   }
// `;

export { TimeLineWrapper, ColumnWrapper, ColumnContainer, TimeLineBar };
