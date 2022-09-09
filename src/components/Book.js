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
        className="consult"
        onClick={() =>
          navigate(`/book-details/${bookId}/${bookDetails.isbn_13}`)
        }
      >
        Consulter
      </button>
    );
    DeleteButton = (
      <button className="delete" onClick={() => DeleteBook(bookId)}>
        Supprimer
      </button>
    );
  } else if (owner !== currentUserInfo._id) {
    UpdateButton = (
      <button
        className="consult"
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
      <ButtonWrapper>
        {UpdateButton}
        {DeleteButton}
      </ButtonWrapper>
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
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  button {
    border: none;
    border-radius: 12px;
    padding: 0.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .consult {
    background-color: #fffdc0;
  }
  .delete {
    background-color: #ffc8c8;
  }
`;
