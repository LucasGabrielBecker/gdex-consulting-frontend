import React from 'react'
import styled from "styled-components"

const BurguerStyled = styled.div`
    width: 30px;
    height: 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction: column;
    div{
        width: 100%;
        height: 2px;
        background-color: rebeccapurple;
    }

    div:nth-child(1){
        background-color: blue;
    }
    div:nth-child(2){
        background-color:#57046b;
    }
    div:nth-child(3){
        background-color:#57046b;
    }
`;

const Burguer : React.FC = () =>{
    return(
        <BurguerStyled >
            <div></div>
            <div></div>
            <div></div>
        </BurguerStyled>
    )
}

export default Burguer;