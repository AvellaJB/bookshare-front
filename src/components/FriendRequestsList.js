import React, { useEffect } from "react";
import { FriendResponse } from "../components";
import { useStateContext } from "../lib/context";

function FriendRequestsList() {
  const { friendRequestList, fetchFriendRequestList } = useStateContext();

  useEffect(() => {
    fetchFriendRequestList();
  }, []);

  return (
    <div>
      {friendRequestList.map((friend) => {
        return <FriendResponse friendInfo={friend} key={friend._id} />;
      })}
    </div>
  );
}

export default FriendRequestsList;
