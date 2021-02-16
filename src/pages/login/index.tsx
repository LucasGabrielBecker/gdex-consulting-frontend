import React from "react";
import axios from "axios";
import api from "../../utils/api";
import { useHistory, Link } from "react-router-dom";
import RuntLogo from "../../assets/logo_runt.svg";
import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import toaster from "../../utils/toaster";

const Login: React.FC = () => {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [count, setCount] = React.useState(1);
  const [newUser, setNewUser] = React.useState(false);
  const history = useHistory();

  const gobackPage = () => {
    setNewUser(false);
    setCount(count - 1);
  };

  const submitEmail = (e: any) => {
    e.preventDefault();
    api
      .post("/users/authenticate", {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data));
          return history.push("/home");
        }
        console.log(response.data);
        if (response.data.code === 404) {
          setNewUser(true);
          toaster("Usuário não encontrado", "error");
        }
        if (response.data.code === 403) {
          setNewUser(true);
          toaster("Credenciais Inválidas", "error");
        }
      });
  };

  const updateForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
      <Link to="/"><img src={RuntLogo} alt="LogoGdex" /></Link>
      <div className="input-form">
        {count === 1 ? (
          <div className="line1">
            <span>Entre na sua conta</span>
            <p>Insira seu e-mail</p>
            <input
              type="text"
              placeholder="E-mail"
              value={form.email}
              name="email"
              onChange={updateForm}
            />
            <div className="continue" onClick={() => setCount(count + 1)}>
              Continuar
            </div>
          </div>
        ) : null}

        {count === 2 ? (
          <div className="line1">
            <FiChevronLeft
              size={33}
              color="#000000"
              className="iconGoBack"
              onClick={gobackPage}
            />
            <span>Entre na sua conta</span>
            <p>Insira sua senha</p>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              name="password"
              onChange={updateForm}
            />
            <div className="continue" onClick={submitEmail}>
              Entrar
            </div>
            {newUser ? (
              <Link to="/register">
                <h2 id="registerSpan">Create account</h2>
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Login;
