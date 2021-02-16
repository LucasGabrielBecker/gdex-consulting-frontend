import React, { useState, InputHTMLAttributes } from "react";
import { Container } from "./styles";
import NumberMarker from "../../components/numberMarker"
import GirlComputer from "../../assets/girl_on_computer.svg"
import LogoRobot from "../../assets/findRoboty.svg"

type NumberProps = {
    number: string,
    text: string
}

const HowItWorks = () => {
  return (
    <Container>
        <div className="header">
            <h2>Como funciona?</h2>
        </div>
        <div className="leftSide">
            <NumberMarker number="1" text="Você cadastra seu projeto na plataforma."/>

            <img src={GirlComputer} alt="girl image"/>
        </div>
        <div className="rightSide">
            <NumberMarker number="2" text="Nosso robô de inteligência artificial analisa seu projeto e faz o match com melhores Pro-Lancers Cadastrados." />
            <img src={LogoRobot} alt="Logo robo gdex" />
        </div>
    </Container>
  );
};

export default HowItWorks;
