import React, { useState } from "react";
import styled from "styled-components";
import services from "../lib/api";
import { useStateContext } from "../lib/context";

function ISBNInput() {
  const { fetchAndSetBooks } = useStateContext();

  const [value, setValue] = useState("");

  function getFormValue(elements, name) {
    return elements[name]?.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const ISBN = getFormValue(elements, "ISBN");
    if (!ISBN) {
      alert("Ajouter un numero ISBN");
      return;
    }
    services
      .AddBook({ ISBN })
      .then(() => {
        setValue("");
        fetchAndSetBooks();
      })
      .catch((err) => console.log(err));
  }

  return (
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        <input
          className="inputAddBook"
          name="ISBN"
          type="text"
          placeholder="Entrez le numéro ISBN"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button>Ajouter</button>
      </form>
    </InputWrapper>
  );
}

export default ISBNInput;

const InputWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 5vh;
  padding: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
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
