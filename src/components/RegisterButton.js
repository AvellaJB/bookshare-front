import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/register">
      <Button>s'inscrire</Button>
    </Link>
  );
}

export default LoginButton;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #ffedd6;
  color: #000000;
  font-size: 1rem;
  border-radius: 12px;
  border-width: 1px;
  border-color: #000000;
`;
