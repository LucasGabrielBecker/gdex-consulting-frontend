import { InputProps } from "@material-ui/core";
import React from "react"
import styled from "styled-components"

type NumberProps = {
    number: string,
    text: string,
    maxWidth?:string
}

const Container= styled.div`
    .number{
           max-width: 100%;
           display:flex;
           align-items:center;
           justify-content:center;

        span{
            font-weight: 700;
        }
        span:nth-child(1){
           font-size: 3rem;
           background-color:#d2d2d2;
           padding:2rem;
           border-radius: 45%;
        }
        span:nth-child(2){
            margin-left:10px;
           line-height:3.5rem;
           font-size: 2.3rem;
           margin-left: 10px;
        }
    }
`

const NumberMarker:React.FunctionComponent<NumberProps> = ({number, text, maxWidth}:NumberProps)=>{
    return(
        <Container>
            <div className="number">
                <span>{number}</span>
                <span>{text}</span>
            </div>
            <div className="text"></div>
        </Container>
    )
}


export default NumberMarker;