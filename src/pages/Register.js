import React, { useState } from "react";
import styled from "styled-components";
import services from "../lib/api";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components";

function Register() {
  const navigate = useNavigate();

  const [body, setBody] = useState({
    mail: "",
    password: "",
    pseudo: "",
    confirmPassword: "",
  });

  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    services
      .register(body)
      .then(() => {
        alert("User Created.");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Register failed.");
      });
  }

  return (
    <RegisterWrapper>
      <form onSubmit={handleSubmitLogin} onChange={handleChangeInput}>
        <Logo />
        <div>
          <h1>Inscription</h1>
        </div>
        <input
          className="inputRegister"
          placeholder="Votre pseudo"
          type="text"
          name="pseudo"
        />
        <input
          className="inputRegister"
          placeholder="Votre email"
          type="email"
          name="mail"
        />
        <input
          className="inputRegister"
          placeholder="Votre mot de passe"
          type="password"
          name="password"
        />
        <input
          className="inputRegister"
          placeholder="Confirmez votre mot de passe"
          type="password"
          name="confirmPassword"
        />
        <Button className="buttonRegister">envoyer</Button>
      </form>
    </RegisterWrapper>
  );
}

export default Register;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #000000;
  color: #ffedd6;
  font-size: 0.7rem;
  border-radius: 12px;
  border-width: 1px;
  border-color: #000000;
`;

const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    padding: 0.5rem;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    margin: 0.5rem;
  }
`;
