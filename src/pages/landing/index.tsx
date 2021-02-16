import React, { useState } from "react";
import { Container, MainContent } from "./styles";
import Workers from "../../assets/workers.svg";
import Header from "../../components/header";

const Landing: React.FC = () => {
  return (
    <Container className="container">
      <Header />
      <MainContent>
        <div className="text-content">
          <p>Conecte seu projeto com os melhores squads do mercado.</p>
          <span>
            Conectamos você com squads remotos de alta performance, e juntos
            criamos seu produto com as melhores práticas e metodologias do
            mercado.
          </span>
          <div className="solicitacao">Solicite uma demonstração</div>
        </div>
        <div className="workers">
          <img src={Workers} alt="workers working" />
        </div>
      </MainContent>
    </Container>
  );
};

export default Landing;
