import React, { useEffect } from "react";
import { Friend } from "../components";
import { useStateContext } from "../lib/context";
import styled from "styled-components";

function UserSearchList() {
  const { searchUserResult, setSearchingUser } = useStateContext();
  return (
    <div>
      <Titles>
        <h2>Ma recherche</h2>
      </Titles>
      <button
        onClick={() => {
          setSearchingUser(false);
        }}
      >
        Annuler
      </button>
      {searchUserResult.map((friend) => {
        return <Friend friendInfo={friend} key={friend._id} />;
      })}
    </div>
  );
}

export default UserSearchList;

const Titles = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
