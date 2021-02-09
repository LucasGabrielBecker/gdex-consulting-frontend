import React from 'react';
import LogoImg from "../../assets/logo_gdex.svg"
import WorkersImg from "../../assets/workers.svg"
import "./styles.css"
import { Link } from 'react-router-dom'


const Landing: React.FC = () => {
  return (
      <div className="main">
        <div className="header">
              <div className="left-side">
                  <img src={LogoImg} alt="Logo Gdex"/>
              </div>
              <div className="right-side">
                <ul>
                      <li>Para empresas</li>
                      <li>Para Parceiros</li>
                      <li>Soluções</li>
                </ul>
                <Link to="/login" className="classLink">
                    <div className="btn-entrar">
                        <span>Entrar</span>
                    </div>
                </Link>
              </div>
          </div>
        <div className="main-content">
                <div className="text-content">
                    <h3>Conecte seu projeto com os melhores squads do mercado.</h3>
                    <p>Conectamos você com squads remotos de alta performance, e juntos criamos seu produto com as melhores práticas e metodologias do mercado.</p>

                    <div className="btn-orcamento">
                        Solicite uma demonstração
                    </div>
                </div>
                <div className="workers">
                    <img src={WorkersImg} alt="Trabalhadores Image"/>
                </div>
            </div>
      </div>
  )
}

export default Landing;