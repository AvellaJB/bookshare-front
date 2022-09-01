import React, { useEffect } from "react";
import {
  Navbar,
  Friend,
  UserSearchInput,
  FriendList,
  UserSearchList,
} from "../components";
import { useStateContext } from "../lib/context";

function Friends() {
  const { searchingUser } = useStateContext();

  return (
    <div>
      <div>
        <h2>Amis</h2>
      </div>
      {searchingUser ? <UserSearchList /> : <FriendList />}
      <UserSearchInput />
      <Navbar />
    </div>
  );
}

export default Friends;
