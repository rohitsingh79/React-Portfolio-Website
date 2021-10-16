import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 411px 411px 411px;
  grid-gap: 30px;
  padding-top: 2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: 200px 200px 200px;
    grid-gap: 100px;
  }

  .GridChild {
    background-color: #fff;
    box-shadow: 0px 0px 56px -8px rgb(0 0 0 / 17%);
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    transform: translateY(40px);
    @media only screen and (max-width: 600px) {
    }
  }
`;

export { GridContainer };
