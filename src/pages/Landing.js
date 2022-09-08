import React from "react";
import styled from "styled-components";
import { GoBook } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import { LoginButton, RegisterButton, Logo } from "../components";
import kidsReading from "../assets/kids-reading.jpg";
import AppLending from "../assets/app-lending.png";
import MyLibrary from "../assets/app-my-library.png";
import HipsterGirl from "../assets/hipster-girl.png";

function Landing() {
  return (
    <div>
      <div>
        <Logo />
        <HeroText>
          <Welcome>
            <span>
              <h2>Bienvenue sur BOOKSHARE</h2>
            </span>
            L'application de partage de livres
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
      <SecondPageDiv>
        <TextSecondPage>
          <h2>Suis ta bibliothèque</h2>

          <p>Vous et vos amis avez des collections de livres incroyables.</p>
          <p>
            Vous voulez faire profiter, mais nous ne savez plus à qui avez avez
            prêté votre livre?
          </p>
          <p>
            Avec SHAREBOOK tu visualises qui a tes livres et pour combien de
            temps.
          </p>
        </TextSecondPage>
      </SecondPageDiv>
      <ThirdPageDiv>
        <div className="image-div">
          <img src={MyLibrary} alt="" />
        </div>
        <div className="text-div">
          <h1>Echanges sur tes livres préférés entre amis.</h1>
          <p>
            Tu est curieux de savoir ce que pense un amis de son livre? Parfait
            !{" "}
          </p>
          <p>
            Tes amis laisse leur reviex sur leur bibliothèque de livre. Laisses
            un commentaires !
          </p>
          <p>Sur SHARBOOK tu peux visualiser leur bibliothèque.</p>
        </div>
      </ThirdPageDiv>
      <FourthPageDiv>
        <div className="text-div">
          <h1>Oublies les livres en doublons.</h1>
          <p>
            Vous êtes dans la boutique, sur le point de craquer sur un nouveau
            numéro de votre mangé préféré?{" "}
          </p>
          <p>Vérifiez d'abord qu'il n'est pas déjà dans votre bibliothèque.</p>
        </div>
        <div className="image-div">
          <img src={HipsterGirl} alt="" />
        </div>
      </FourthPageDiv>
      <FifthPageDiv>
        <h1>Alors connectez vous !</h1>
        <LoginButton />
      </FifthPageDiv>
    </div>
  );
}

export default Landing;

const HeroText = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
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
    font-size: 2.5rem;
  }
  @media screen and (min-width: 900px) {
    align-items: center;
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
  @media screen and (min-width: 900px) {
    width: 20%;
  }
`;

const SecondPageDiv = styled.div`
  height: 80vh;
  background-image: url(${kidsReading});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    background-color: transparent;
    width: 30%;
  }
  @media screen and (max-width: 900px) {
    height: 60vh;
  }
`;

const TextSecondPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;

  background-color: #ffc8c8e6;
  p {
    font-size: 1.2rem;

    background-color: transparent;
  }

  h2 {
    font-size: 3rem;
    background-color: transparent;
  }
  @media screen and (max-width: 900px) {
    padding: 2rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

const ThirdPageDiv = styled.div`
  height: 70vh;
  background-color: #fffdc0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .image-div {
    background-color: transparent;
    width: 50%;
    height: 100%;
    img {
      background-color: transparent;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text-div {
    width: 50%;
    background-color: transparent;
    h1 {
      background-color: transparent;
    }
    p {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;

    height: 100%;
    .text-div {
      width: 100%;
      padding: 2rem;
    }
    .image-div {
      width: 100%;
      padding: 2rem;
    }
  }
`;

const FourthPageDiv = styled.div`
  height: 70vh;
  background-color: #e4d4ff;
  display: flex;
  .text-div {
    width: 50%;
    background-color: transparent;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      background-color: transparent;
    }
    h1 {
      background-color: transparent;
    }
  }
  .image-div {
    width: 50%;
    background-color: transparent;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    height: 100%;
    .text-div {
      width: 100%;
      padding: 2rem;
    }
    .image-div {
      width: 100%;
      padding: 2rem;
    }
  }
`;

const FifthPageDiv = styled.div`
  height: 70vh;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    color: #dddddd;
  }
  h1 {
    background-color: transparent;
  }
`;
