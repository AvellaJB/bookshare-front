import React from "react";
import styled from "styled-components";
import { MdSaveAlt } from "react-icons/md";
import services from "../lib/api";

function BookLended({ bookInfo }) {
  const body = {
    borrower: bookInfo.borrower._id,
    book: bookInfo.book._id,
    owner: bookInfo.book.user,
  };

  function recoverMyBook(body) {
    services.recoverBook(body).then((res) => console.log(res));
  }

  return (
    <Wrapper>
      <div>
        <img
          src={`https://covers.openlibrary.org/b/isbn/${bookInfo.book.ISBN}-L.jpg`}
          alt=""
        />
        <p>prêté à </p>
        <h3>{bookInfo.borrower.pseudo}</h3>
      </div>
      <div>
        <MdSaveAlt
          onClick={() => {
            recoverMyBook(body);
          }}
        />
      </div>
    </Wrapper>
  );
}

export default BookLended;

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
