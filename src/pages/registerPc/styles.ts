import styled, {StyledFunction} from "styled-components";
import React from "react"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    width: 30%;
    height: 60%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 0px 10px;

    .header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2 {
        font-size: 2.2rem;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
    .names {
      width: 100%;
      input {
        width: 48%;
      }
      input:focus {
        outline: none;
      }

      input:nth-child(2) {
        margin-left: 10px;
      }
    }
    .email {
      width: 100%;
      input {
        width: 98%;
      }
    }
    .passwords {
      width: 100%;
      input {
        width: 48%;
      }
      input:nth-child(2) {
        margin-left: 10px;
      }
    }
    .sex-checkbox {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .male {
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 15px;
          margin-right: 10px;
        }
      }
      .female {
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 15px;
          margin-right: 10px;
        }
      }
    }

    .birthday {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .times {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        flex-direction: row;
        input {
          width: 30%;
          border-radius: 0.5rem;
        }
      }
    }

    .btn {
      background-color: #0066ff;
      width: 80%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      transition: background-color 0.2s ease;
      span {
        color: #fff;
        font-size: 1.8rem;
      }
      &:hover {
        cursor: pointer;
        background-color: #0055ff;
      }
    }
  }

  .form input {
    height: 50px;
    border-radius: 10px;
    border: 1px solid #d5d5d5;
    padding: 0px 10px;
  }
  .form input:hover {
    border: 1px solid #0066ff;
  }
  .form input:focus {
    outline: none;
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    img {
      width: 25%;
    }
    .hamgurguer-icon{
        z-index:10;
    }

    .iconturned{
      transform: rotate(10deg)
    }
  }

  .navigation {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0,0,0,.8);
    width: 45%;
    height: 100%;
    padding: 0px 15px;
    transition: .5s all ease;

    ul{
        margin-top: 100px;
        li{
            list-style:none;
            font-size: 16px;
            color:#FFF;
            height:80px;
            text-align:left;
        }
    }
  }

  .closed{
    width: 0;
    padding:0;
  }
`;

