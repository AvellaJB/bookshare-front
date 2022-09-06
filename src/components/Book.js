import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateContext } from "../lib/context";

function Book({ bookDetails, owner, bookId }) {
  const navigate = useNavigate();
  const { currentUserInfo } = useStateContext();

  let UpdateButton;

  if (owner === currentUserInfo._id) {
    UpdateButton = (
      <button
        onClick={() =>
          navigate(`/book-details/${bookId}/${bookDetails.isbn_13}`)
        }
      >
        Modifier
      </button>
    );
  } else if (owner !== currentUserInfo._id) {
    UpdateButton = (
      <button
        onClick={() =>
          navigate(`/book-details/${bookId}/${bookDetails.isbn_13}`)
        }
      >
        Commentaire
      </button>
    );
  }
  return (
    <BookWrapper>
      <img
        src={`https://covers.openlibrary.org/b/isbn/${bookDetails.isbn_13}-L.jpg`}
        alt=""
      />
      <p>{bookDetails.title}</p>
      {UpdateButton}
    </BookWrapper>
  );
}

export default Book;

const BookWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 200px;
  z-index: 2;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  p {
    font-weight: bold;
    font-size: 0.7rem;
  }
`;
