import React, { useEffect } from "react";
import { Friend } from "../components";
import { useStateContext } from "../lib/context";
import { useNavigate } from "react-router-dom";

function FriendList() {
  const { fetchFriendList, friendList } = useStateContext();

  useEffect(() => {
    fetchFriendList();
  }, []);

  return (
    <div>
      {friendList.map((friend) => {
        return <Friend friendInfo={friend} key={friend._id} />;
      })}
    </div>
  );
}

export default FriendList;
