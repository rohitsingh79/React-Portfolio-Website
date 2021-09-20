import styled from "styled-components";

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

export { GridContainer };
