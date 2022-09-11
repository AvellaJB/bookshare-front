import React from "react";
import styled from "styled-components";

function BookBorrowed({ bookInfo }) {
  console.log(bookInfo);
  return (
    <Wrapper>
      <div>
        <img
          src={`https://covers.openlibrary.org/b/isbn/${bookInfo.ISBN}-L.jpg`}
          alt=""
        />
        <p>emprunté à </p>
        <h3>{bookInfo.user.pseudo}</h3>
      </div>
    </Wrapper>
  );
}

export default BookBorrowed;

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    margin: 1rem;
    svg {
      background-color: transparent;
      font-size: 2rem;
    }
  }
  h3 {
    background-color: transparent;
  }
  p {
    background-color: transparent;
    font-size: 0.7rem;
  }
  img {
    height: 150px;
    width: 100px;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
