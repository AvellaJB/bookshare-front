import React, { useState } from "react";
import styled from "styled-components";
import services from "../lib/api";

function ISBNInput() {
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
      })
      .catch((err) => console.log(err));
  }

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          <Input
            className="inputAddBook"
            name="ISBN"
            type="text"
            placeholder="Entrez le numéro ISBN"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputDiv>
        <ButtonDiv>
          <ActualButton>Ajouter</ActualButton>
        </ButtonDiv>
      </Form>
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
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: space-around;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: aliceblue;
  height: 2rem;
  border-radius: 10px;
  text-align: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActualButton = styled.button`
  background-color: white;
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
`;
