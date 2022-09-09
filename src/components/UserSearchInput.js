import React, { useEffect, useState } from "react";
import styled from "styled-components";
import services from "../lib/api";
import { useStateContext } from "../lib/context";

function UserSearchInput() {
  const [value, setValue] = useState("");
  const { setSearchingUser, setSearchUserResult, setFriendRequestView } =
    useStateContext();

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
        setFriendRequestView(false);
        setSearchingUser(true);
        setSearchUserResult(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        <input
          className="inputAddBook"
          name="pseudo"
          type="text"
          placeholder="Nom d'utilisateur"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Rechercher</button>
      </form>
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
