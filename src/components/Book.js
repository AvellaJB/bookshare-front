import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateContext } from "../lib/context";

function Book({ bookDetails, owner, bookId }) {
  const navigate = useNavigate();
  const { currentUserInfo, DeleteBook } = useStateContext();

  let UpdateButton;
  let DeleteButton;

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
    DeleteButton = (
      <button onClick={() => DeleteBook(bookId)}>Supprimer</button>
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
    DeleteButton = "";
  }
  return (
    <BookWrapper>
      <img
        src={`https://covers.openlibrary.org/b/isbn/${bookDetails.isbn_13}-L.jpg`}
        alt=""
      />
      <p>{bookDetails.title}</p>
      {UpdateButton}
      {DeleteButton}
    </BookWrapper>
  );
}

export default Book;

const BookWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 300px;
  z-index: 2;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  p {
    font-weight: bold;
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
