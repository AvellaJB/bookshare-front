import React, { useEffect } from "react";
import { Navbar, Friend } from "../components";
import services from "../lib/api";
import { useStateContext } from "../lib/context";

function Friends() {
  const { fetchFriendList, friendList } = useStateContext();

  console.log(friendList);
  useEffect(() => {
    fetchFriendList();
  }, []);

  return (
    <div>
      <div>
        <h1>Amis</h1>
      </div>
      <div>
        {friendList.map((friend) => {
          return <Friend friendInfo={friend} />;
        })}
      </div>
      <Navbar />
    </div>
  );
}

export default Friends;
