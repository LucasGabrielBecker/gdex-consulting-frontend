import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;

  padding: 20rem;

  img {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .input-form {
    width: 40%;
    height: 60%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 2rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    margin-top: -150px;

    .line1 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      margin-bottom: 3rem;
      width: 80%;
      height: 80%;
      position: relative;

      span {
        font-size: 3rem;
        font-weight: 600;
        margin-top: 5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 2rem;
        margin-bottom: 3rem;
      }
      input {
        width: 70%;
        min-height: 50px;
        font-size: 2rem;
        margin-bottom: 3rem;
        border-radius: 10px;
        border: 1px solid #e2e2e2;
        padding: 0px 10px;
      }
      input::-webkit-input-placeholder {
        color: rgb(180, 180, 180);
      }
      input:focus {
        outline: none;
        border: 1px solid #0066ff;
        font-size: 12px;
      }
      input:focus::-webkit-input-placeholder {
        font-size: 12px;
      }
      .continue {
        background-color: #0066ff;
        width: 70%;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.7rem;
        border-radius: 9px;
        &:hover {
          cursor: pointer;
          background-color: #1974fc;
        }
      }

      .iconGoBack{
        position:absolute;
        top: 10px;
        left: -20px;

        &:hover{
          cursor: pointer;
        }
      }

      #registerSpan{
        font-size: 1.2rem;
        margin-top: 20px;
      }
    }
  }
`;
