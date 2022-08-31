import React from "react";
import styled from "styled-components";
import { GoBook } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import { LoginButton, RegisterButton, Logo } from "../components";

function Landing() {
  return (
    <div>
      <div>
        <Logo />
        <HeroText>
          <Welcome>
            <span>Bienvenue sur BOOKSHARE</span>L'application de partage de
            livres
            <ButtonWrapper>
              <RegisterButton />
              <LoginButton />
            </ButtonWrapper>
          </Welcome>
        </HeroText>
      </div>
      <ArrowDown>
        <AiOutlineDown />
      </ArrowDown>
    </div>
  );
}

export default Landing;

const HeroText = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

const Welcome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: justify;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 3rem;
  span {
    font-weight: bold;
    font-size: 3rem;
  }
`;

const ArrowDown = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 3rem;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
