import { useState } from "react";
import services from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../lib/context";

function Login() {
  /* On décide de stocker les infos du formulaire dans un State. */

  const { setConnected } = useStateContext();

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
        const { jwt } = result;
        localStorage.setItem("jwt", jwt);
        setConnected(true);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Did not work");
      });
  }

  return (
    <div>
      <form
        className="formLogin"
        onSubmit={handleSubmitLogin}
        onChange={handleChangeInput}
      >
        <input
          className="inputLogin"
          type="email"
          name="mail"
          placeholder="Votre email"
        />
        <input
          className="inputLogin"
          type="password"
          name="password"
          placeholder="Votre mot de passe"
        />
        <button className="buttonLogin">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
