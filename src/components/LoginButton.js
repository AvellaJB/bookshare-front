import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login">
      <Button>se connecter</Button>{" "}
    </Link>
  );
}

export default LoginButton;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #000000;
  color: #ffedd6;
  font-size: 1rem;
  border-radius: 12px;
  border-width: 1px;
  border-color: #000000;
`;
