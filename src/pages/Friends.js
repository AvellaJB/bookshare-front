import React, { useEffect } from "react";
import {
  Navbar,
  Friend,
  UserSearchInput,
  FriendList,
  UserSearchList,
  FriendRequestsList,
} from "../components";
import { useStateContext } from "../lib/context";
import styled from "styled-components";

function Friends() {
  const { searchingUser, setFriendRequestView, friendRequestView } =
    useStateContext();

  let title;
  if (searchingUser) {
    title = (
      <Titles>
        <h2>Ma recherche</h2>
      </Titles>
    );
  } else {
    title = (
      <Titles>
        <h2
          onClick={() => {
            setFriendRequestView(false);
          }}
        >
          Mes amis
        </h2>
        <h2
          onClick={() => {
            setFriendRequestView(true);
          }}
        >
          Demandes d'amis
        </h2>
      </Titles>
    );
  }

  let view;
  if (friendRequestView) {
    view = <FriendRequestsList />;
  } else if (!searchingUser) {
    view = <FriendList />;
  } else if (searchingUser) {
    view = <UserSearchList />;
  }

  return (
    <div>
      {title}
      {view}
      <UserSearchInput />
      <Navbar />
    </div>
  );
}

export default Friends;

const Titles = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
