import React from "react";
import RuntLogo from "../../assets/logo_runt.svg";
import styled from "styled-components";
import Burguer from "../burguer";
import { Link } from "react-router-dom";

const HeaderComponent = styled.div`
  width: 100%;
  height: 10%;
  min-height: 70px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: "logo infos button";
  align-items: center;
  justify-content: center;

  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .option {
    width: 100%;
    justify-self: flex-start;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      li {
        margin-left: 30px;
        font-size: 1.7rem;
      }
    }
  }
  .btn-entrar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid #ec38bc;
    width: 10rem;
    height: 3.5rem;
    transition: background 0.3s ease;
    font-size: 1.3rem;
    &:hover {
      background-color: #f7a6e1;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo hamburguer";
    .img-content {
      grid-area: logo;
    }

    .option {
      grid-area: hamburguer;
    }

    .btn-entrar {
      display: none;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <div className="img-content">
        <img src={RuntLogo} alt="Runt Logo" />
      </div>
      <div className="option">
        <ul>
          <li>Para pessoas</li>
          <li>Para parceiros</li>
          <li>Soluções</li>
        </ul>
      </div>
      <Link to="/login">
        <div className="btn-entrar">Entrar</div>
      </Link>
    </HeaderComponent>
  );
};

export default Header;
