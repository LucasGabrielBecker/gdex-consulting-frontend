import React from 'react';
import axios from 'axios';
import api from '../../utils/api'
import {useHistory} from 'react-router-dom'
import GdexLogo from "../../assets/logo_gdex.svg"
import { Container } from "./styles"




const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()


    const submitEmail = (e:any) => {
        e.preventDefault()
        api.post("/users/authenticate", {
            email,
            password
        }).then(response=>{
            if(response.data.user){
                localStorage.setItem('user', JSON.stringify(response.data))
                return history.push('/home')
            }
            window.alert('bad credentials')
        })
    }

  return (
    <Container>
        <img src={GdexLogo} alt="LogoGdex"/>
        <div className="input-form">
            <div className="line1">
                <span>Entre na sua conta</span>
                <p>Insira seu e-mail</p>
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <div className="continue" onClick={submitEmail}>Continuar</div>
            </div>

        </div>
    </Container>
  )
}

export default Login;