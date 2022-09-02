import React, { useEffect, useState } from "react";
import styled from "styled-components";
import services from "../lib/api";
import { useStateContext } from "../lib/context";

function UserSearchInput() {
  const [value, setValue] = useState("");
  const { setSearchingUser, setSearchUserResult } = useStateContext();

  function getFormValue(elements, name) {
    return elements[name]?.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const pseudo = getFormValue(elements, "pseudo");
    if (!pseudo) {
      alert("Ajouter un pseudo");
      return;
    }
    services
      .SearchUser({ pseudo: pseudo })
      .then((res) => {
        setValue("");
        setSearchingUser(true);
        setSearchUserResult(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          <Input
            className="inputAddBook"
            name="pseudo"
            type="text"
            placeholder="Nom d'utilisateur"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputDiv>
        <ButtonDiv>
          <ActualButton>Rechercher</ActualButton>
        </ButtonDiv>
      </Form>
    </InputWrapper>
  );
}

export default UserSearchInput;

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
