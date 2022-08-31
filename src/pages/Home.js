import React from "react";
import { Navbar, ISBNInput, Library } from "../components";
import styled from "styled-components";

function Home() {
  return (
    <HomeWrapper>
      <h2>Ma bibliothèque</h2>
      <Library userType={"user"} />
      <ISBNInput />
      <Navbar />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  h2 {
    text-align: center;
    padding: 2rem;
  }
`;
