import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Library, Navbar } from "../components";
import { useStateContext } from "../lib/context";

function FriendsLibrary() {
  const { id } = useParams();
  const {
    getFriendsBookList,
    friendsBookList,
    getOneUserDetails,
    oneUserDetails,
    currentUserInfo,
  } = useStateContext();

  useEffect(() => {
    getOneUserDetails({ id: id });
    getFriendsBookList({ id: id });
  }, []);

  let friendList = oneUserDetails.friends;
  let isFriend = friendList?.find((element) => element === currentUserInfo._id);
  let library;

  if (isFriend) {
    library = <Library bookListCurrentUser={friendsBookList} />;
  } else {
    library = <div>Vous n'êtes pas amis avec cette personne.</div>;
  }

  return (
    <div>
      <h1>Libraire du pote</h1>
      {library}
      <Navbar />
    </div>
  );
}

export default FriendsLibrary;
