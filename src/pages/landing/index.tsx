import React,{useState} from 'react';
import { Container,MainContent, Header } from "./styles"
import {Link} from "react-router-dom"
import GdexLogo from "../../assets/logo_gdex.svg"
import Workers from "../../assets/workers.svg"

const Landing: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  const handleHovered = () =>{
    setHovered(!hovered)
  }
  return (
    <Container>
      <Header>
      <Link to="/"><img src={GdexLogo} alt="appLogo"/></Link>
      <div className="">
        <ul>
          <li>Para empresas</li>
          <li>Para Parceiros</li>
          <li>Soluções</li>
        </ul>
      </div>
      <Link to="/login">
        <div className="button-entrar">
          Entrar
        </div>
      </Link>
      </Header>
      <MainContent>
        <div className="text-content">
          <p>Conecte seu projeto com os melhores squads do mercado.</p>
          <span>Conectamos você com squads remotos de alta performance, e juntos criamos seu produto com as melhores práticas e metodologias do mercado.</span>
          <div className="solicitacao">
            Solicite uma demonstração
          </div>
        </div>
        <div className="workers">
          <img src={Workers} alt="workers working" />
        </div>
      </MainContent>
    </Container>
  )
}

export default Landing;