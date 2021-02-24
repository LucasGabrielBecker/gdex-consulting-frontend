import React from "react"
import { Container } from "./styles"
import RuntImage from "../../assets/logo_runt.svg"
import api from "../../utils/api"
import toaster from "../../utils/toaster"
import { ToastContainer } from "react-toastify";

const RegisterPage: React.FC = () =>{
    const [radio, setRadio] = React.useState(true)
    const [form, setForm] = React.useState({
         firstName: "",
         lastName: "" ,
         email: "",
         nickname: "",
         password: "",
         confirmPassword: "",
         day: "",
         month:"",
         year:"",
         sex: radio ? 1 : 0
        });

    const updateForm = (e: any) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        console.log(form)
      };

    const updateRadio = (e:any)=>{
        setRadio(!radio)
        radio ? console.log(`Feminino == 0`) : console.log(`Masculino == 1`)
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        if(form.password != form.confirmPassword){
            toaster("Passwords do not match", "error")

        }
        // setForm({...form, name:`${firstName} ${lastName}`})
        api.post("/users/create", form).then(res =>{
            if(res.data.succes == false){
                toaster(res.data.msg, "error")
            }
        })

    }
    

    return(
        <Container>
            <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
            <div className="form">
                <div className="header">
                    <h2>Crie sua Conta</h2>
                    <h3>Dados Iniciais</h3>
                </div>
                <div className="names">
                    <input type="text" placeholder="Nome" onChange={updateForm} name="firstName" required/>
                    <input type="text" placeholder="Sobrenome" onChange={updateForm} name="lastName" required/>
                </div>
                <div className="email">
                    <input type="email" placeholder="Email" onChange={updateForm} name="email" required/>
                </div>
                <div className="passwords">
                    <input type="password" name="password" onChange={updateForm} placeholder="Crie uma senha" required/>
                    <input type="password" name="confirmPassword" onChange={updateForm} placeholder="Confirme sua senha" required/>
                </div>
                <div className="sex-checkbox">
                    <div className="male">
                        <input type="radio" name="sex-male" checked={radio} onChange={updateRadio}/>
                        <label htmlFor="sex-male">Masculino</label>
                    </div>
                    <div className="female">
                        <input type="radio" name="sex-female" checked={!radio} onChange={updateRadio}/>
                        <label htmlFor="sex-female">Feminino</label>
                    </div>
                </div>
                <div className="birthday">
                    <div className="times">
                        <input type="number" placeholder="Dia" min="0" onChange={updateForm} name="day"/>
                        <input type="number" placeholder="Mes" min="0" onChange={updateForm} name="month"/>
                        <input type="number" placeholder="Ano" min="0" onChange={updateForm} name="year"/>
                    </div>
                </div>
                <div className="warn">

                </div>
                <div className="btn" onClick={handleSubmit}>
                    <span>Cadastrar</span>
                </div>
            </div>

        </Container>
    )
}


export default RegisterPage;