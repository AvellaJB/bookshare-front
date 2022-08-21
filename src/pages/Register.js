import React, { useState } from "react";
import styled from "styled-components";
import services from "../lib/api";
import { useNavigate } from "react-router-dom";

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
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("Register failed.");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin} onChange={handleChangeInput}>
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
        <Button className="buttonRegister">Envoyer</Button>
      </form>
    </div>
  );
}

export default Register;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #1fdf64;
  color: #222222;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  border-width: 1px;
  border-color: #1fdf64;
`;
