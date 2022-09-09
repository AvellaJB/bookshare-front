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
import { useState } from "react";

function Friends() {
  const { searchingUser, setFriendRequestView, friendRequestView } =
    useStateContext();

  const [underLineFriends, setUnderLineFriends] = useState("");
  const [underLineRequest, setUnderLineRequest] = useState("");

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
          style={{ textDecoration: underLineFriends }}
          onClick={() => {
            setFriendRequestView(false);
            setUnderLineFriends("underline");
            setUnderLineRequest("");
          }}
        >
          Mes amis
        </h2>
        <h2
          style={{ textDecoration: underLineRequest }}
          onClick={() => {
            setFriendRequestView(true);
            setUnderLineFriends("");
            setUnderLineRequest("underline");
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
