import React from 'react';
import axios from 'axios';
import api from '../../utils/api'
import {useHistory} from 'react-router-dom'
import GdexLogo from "../../assets/logo_gdex.svg"
import "./style.css"



const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()


    const handleSubmit = (e:any) => {
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
    <div className="main">
        <img src={GdexLogo} alt="LogoGdex"/>
        <div className="input-form">
            <div className="line1">
                <span>Entre na sua conta</span>
                <p>Insira seu e-mail</p>
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <div className="continue" onClick={handleSubmit}>Continuar</div>
            </div>

        </div>
    </div>
  )
}

export default Login;