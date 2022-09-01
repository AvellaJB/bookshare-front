import React, { useEffect } from "react";
import { Friend } from "../components";
import { useStateContext } from "../lib/context";

function UserSearchList() {
  const { searchUserResult } = useStateContext();
  return (
    <div>
      {searchUserResult.map((friend) => {
        return <Friend friendInfo={friend} key={friend._id} />;
      })}
    </div>
  );
}

export default UserSearchList;
