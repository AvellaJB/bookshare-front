import React, { createContext, useContext, useState } from "react";
import services from "./api";
import ISBNApi from "./ISBNApi";

const Context = createContext();

export const StateContext = ({ children }) => {
  //State creation
  const [connected, setConnected] = useState(false);
  const [bookListCurrentUser, setBookListCurrentUser] = useState([]);
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [friendList, setCurrentUsersFriendList] = useState([]);
  const [searchingUser, setSearchingUser] = useState(false);
  const [searchUserResult, setSearchUserResult] = useState([]);
  const [friendRequestView, setFriendRequestView] = useState(false);
  const [friendRequestList, setFriendRequestList] = useState([]);
  //Functions :

  function fetchAndSetBooks() {
    services
      .getBookList()
      .then((result) => {
        setBookListCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* function fetchDetailsWithISBNList() {
    fetchAndSetBooks().then(
      bookListCurrentUser.map((book) => {
        ISBNApi.getDetailsFromISBN(book.ISBN).then((result) => {
          let Booklist = [];
          Booklist.push(result);
          return Booklist;
        });
      })
    );
  } */

  async function fetchFriendList() {
    const body = { currentUser: currentUserInfo._id };
    await services.getFriendList(body).then((result) => {
      setCurrentUsersFriendList(result);
    });
  }

  async function fetchFriendRequestList() {
    const body = { currentUser: currentUserInfo._id };

    await services.FriendRequestList(body).then((result) => {
      setFriendRequestList(result);
    });
  }

  return (
    <Context.Provider
      value={{
        connected,
        setConnected,
        fetchAndSetBooks,
        bookListCurrentUser,
        setCurrentUserInfo,
        currentUserInfo,
        fetchFriendList,
        friendList,
        setSearchingUser,
        searchingUser,
        setSearchUserResult,
        searchUserResult,
        friendRequestView,
        setFriendRequestView,
        friendRequestList,
        fetchFriendRequestList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
