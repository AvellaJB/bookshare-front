import React from "react";
import { useEffect } from "react";
import { Navbar, ISBNInput, Library } from "../components";
import styled from "styled-components";
import { useStateContext } from "../lib/context";

function Home() {
  const { fetchAndSetBooks, bookListCurrentUser } = useStateContext();

  useEffect(() => {
    fetchAndSetBooks();
  }, []);

  return (
    <HomeWrapper>
      <h2>Ma bibliothèque</h2>
      <Library userType={"user"} bookListCurrentUser={bookListCurrentUser} />
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
