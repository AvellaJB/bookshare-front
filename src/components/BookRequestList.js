import React from "react";
import { useStateContext } from "../lib/context";
import { useEffect } from "react";
import BookRequest from "./BookRequest";
function BookRequestList() {
  const { currentUserInfo, getBookRequests, bookRequests } = useStateContext();

  useEffect(() => {
    getBookRequests({ currentUser: currentUserInfo._id });
  }, []);

  return (
    <div>
      {bookRequests.map((request) => {
        return <BookRequest requestInfo={request} />;
      })}
      <div style={{ marginBottom: "5vh", marginTop: "3rem" }}>.</div>
    </div>
  );
}

export default BookRequestList;
