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
      {searchingUser ? <UserSearchList /> : <FriendList />}
      <UserSearchInput />
      <Navbar />
    </div>
  );
}

export default Friends;
