import React from 'react'
import { Container } from './styles'
import NumberMarker from "../../components/numberMarker"
import Border from "../../assets/border.svg"
import Squad from "../../assets/squad.svg"
import Alignment from "../../assets/alignment.svg"

const ThirdStep : React.FC = ()=>{
    return(
        <Container>
            <div className="header">
                <NumberMarker number="3" maxWidth="300" text="Nosso time de especialistas analisa as recomendações do robô para montar a squad de alta performance"/>
            </div>
            <div className="leftside">
                <img src={Border} alt="Border Image" />
            </div>
            <div className="rightside">
                <div className="main-content">
                    <div className="header">
                        <span>Nesta etapa você poderá:</span>
                    </div>
                    <div className="main">
                        <img src={Squad} alt="Squad Image"/>
                        <span>Conhecer o time atribuído para tocar o seu projeto</span>
                    </div>
                    <div className="footer">
                        <img src={Alignment} alt="footer image"/>
                        <span>Alinhar prazos e expectativas</span>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default ThirdStep;