import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Library, Navbar } from "../components";
import { useStateContext } from "../lib/context";

function FriendsLibrary() {
  const { id } = useParams();
  const { getFriendsBookList, friendsBookList } = useStateContext();

  useEffect(() => {
    getFriendsBookList({ id: id });
  }, []);

  return (
    <div>
      <h1>Libraire du pote</h1>
      <Library bookListCurrentUser={friendsBookList} />
      <Navbar />
    </div>
  );
}

export default FriendsLibrary;
