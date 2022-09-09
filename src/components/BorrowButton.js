import React from "react";
import styled from "styled-components";
import { useStateContext } from "../lib/context";
import services from "../lib/api";
import { useParams } from "react-router-dom";

function BorrowButton() {
  const { bookDetails, currentUserInfo, getBookDetails } = useStateContext();
  const params = useParams();
  function borrowThisBook() {
    const body = {
      borrower: currentUserInfo._id,
      owner: bookDetails.user._id,
      book: bookDetails._id,
    };

    services.borrowBook(body).then((res) => {
      console.log(res);
      getBookDetails({ bookId: params.id });
    });
  }

  return (
    <ButtonStyle
      onClick={() => {
        borrowThisBook();
      }}
    >
      Emprunter
    </ButtonStyle>
  );
}

export default BorrowButton;

const ButtonStyle = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: none;
  background-color: #fffdc0;
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
  width: 10%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`;
