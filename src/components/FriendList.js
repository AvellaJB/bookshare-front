import React, { useEffect } from "react";
import { Friend } from "../components";
import { useStateContext } from "../lib/context";
import styled from "styled-components";

function FriendList() {
  const { fetchFriendList, friendList } = useStateContext();

  useEffect(() => {
    fetchFriendList();
  }, []);

  return (
    <div>
      <Titles>
        <h2>Mes Amis</h2>
        <h2>Demandes d'amis</h2>
      </Titles>
      {friendList.map((friend) => {
        return <Friend friendInfo={friend} key={friend._id} />;
      })}
    </div>
  );
}

export default FriendList;

const Titles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 10vh;
  align-items: center;
`;
