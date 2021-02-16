import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "leftSide rightSide"
    "leftSide rightSide"
    "leftSide rightSide";

  .header {
    grid-area: header;
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  .leftSide {
    grid-area: leftSide;
    background-color: #fff;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    img {
      min-width: 30rem;
    }
  }

  .rightSide {
    grid-area: rightSide;
    background-color: #fff;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    img {
      min-width: 30rem;
    }
  }
`;
