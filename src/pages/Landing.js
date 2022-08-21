import React from "react";
import styled from "styled-components";
import { GoBook } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import { LoginButton, RegisterButton } from "../components";

function Landing() {
  return (
    <div>
      <div>
        <LogoDiv>
          <GoBook />
          <span>BOOKSHARE</span>
        </LogoDiv>
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

const LogoDiv = styled.div`
  padding: 2rem;
  height: 5vh;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  span {
    transform: translate(0px, -2px);
    margin-left: 5px;
  }
`;

const HeroText = styled.div`
  height: 80vh;
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
