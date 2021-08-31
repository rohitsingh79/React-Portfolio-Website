import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimeLineWrapper = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 150px 150px 150px;
  grid-gap: 10px;
  padding: 40px;

  .TimeLineChild {
    text-align: left;
    font-size: 15px;
    background-color: #f2f3f7;
    width: 1250px;
  }
`;

export { TimeLineWrapper, ColumnWrapper };
