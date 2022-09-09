import React from "react";
import { useState } from "react";
import services from "../lib/api";
import { useStateContext } from "../lib/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function CommentInput({ bookDetails }) {
  const params = useParams();
  const [value, setValue] = useState("");
  const { currentUserInfo, getBookDetails } = useStateContext();

  function getFormValue(elements, name) {
    return elements[name]?.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const comment = getFormValue(elements, "comment");
    if (!comment) {
      alert("Ajouter un commentaire");
      return;
    }
    const body = {
      bookId: bookDetails._id,
      comment: comment,
      friend: currentUserInfo._id,
    };

    services.CommentBook(body).then((res) => {
      getBookDetails({ bookId: params.id });
      setValue("");
    });
  }

  return (
    <CommentWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          placeholder="Commentaire"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
      <div>.</div>
    </CommentWrapper>
  );
}

export default CommentInput;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  input {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 10px -2px inset,
      rgba(0, 0, 0, 0.3) 0px 3px 6px -3px inset;
    border: none;
    background-color: white;
    height: 2rem;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    @media screen and (max-width: 900px) {
      width: 70%;
    }
  }
  button {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: none;
    background-color: white;
    width: 5rem;
    height: 2rem;
    border-radius: 10px;
    width: 10%;
    @media screen and (max-width: 900px) {
      width: 30%;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;
