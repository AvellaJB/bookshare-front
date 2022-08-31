import { useState } from "react";
import services from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../lib/context";
import styled from "styled-components";
import { Logo } from "../components";

function Login() {
  /* On décide de stocker les infos du formulaire dans un State. */

  const { setConnected, setCurrentUserInfo } = useStateContext();

  const navigate = useNavigate();

  const [body, setBody] = useState({
    mail: "",
    password: "",
  });

  /* Pour mettre à jour notre body. On récupère l'object déjà existant et on ajoute
  la valeurs aux différentes clés (mail : test@mail.com) */
  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  /* Récupère simplement l'input dans le e.target. */

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  /* Une fois qu'on submit on envoie les infos à la BDD
  On set le setConnected à true qui remonte dans Allpages et le distribue aux autres
  composants.
  Crée également un élement de localstorage. */
  function handleSubmitLogin(e) {
    e.preventDefault();
    services
      .login(body)
      .then((result) => {
        const { jwt, userInfo } = result;

        localStorage.setItem("jwt", jwt);
        setConnected(true);
        setCurrentUserInfo(userInfo);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Did not work");
      });
  }

  return (
    <LoginWrapper>
      <Logo />
      <h1>Connexion</h1>
      <form
        className="formLogin"
        onSubmit={handleSubmitLogin}
        onChange={handleChangeInput}
      >
        <StyledInput
          className="inputLogin"
          type="email"
          name="mail"
          placeholder="Votre email"
        />
        <StyledInput
          className="inputLogin"
          type="password"
          name="password"
          placeholder="Votre mot de passe"
        />
        <button>se connecter</button>
      </form>
      <div>
        <p>
          "Je me suis planté je voulais cliquer sur{" "}
          <a href="/register">m'inscrire</a>"
        </p>
      </div>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  input {
    display: flex;
    margin: 1rem;
  }
  button {
    padding: 0.5rem;
    background-color: #000000;
    color: #ffedd6;
    font-size: 0.7rem;
    border-radius: 12px;
    border-width: 1px;
    border-color: #000000;
  }
  p {
    font-size: small;
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  background-color: white;
  text-align: center;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: #000000;
  color: #ffedd6;
  font-size: 1rem;
  border-radius: 12px;
  border-width: 1px;
  border-color: #000000;
`;

const InputFlex = styled.div`
  display: flex;
`;
