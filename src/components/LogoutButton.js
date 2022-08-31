import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../lib/context";

function LogoutButton() {
  const navigate = useNavigate();
  const { setConnected } = useStateContext();

  function disconnect() {
    localStorage.removeItem("jwt");
    setConnected(false);
    navigate("/");
  }

  return <button onClick={disconnect}>se deconnecter</button>;
}

export default LogoutButton;
