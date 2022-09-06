import React, { createContext, useContext, useState } from "react";
import services from "./api";

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
  const [friendsBookList, setFriendsBookList] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
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

  async function AcceptFriendRequest(body) {
    await services.AcceptFriendRequest(body).then((result) => {
      console.log(result);
    });
  }
  async function RejectFriendRequest(body) {
    await services.RejectFriendRequest(body).then((result) => {
      console.log(result);
    });
  }

  async function getFriendsBookList(body) {
    await services.getFriendsBookList(body).then((result) => {
      setFriendsBookList(result);
    });
  }

  async function getBookDetails(body) {
    await services
      .getBookDetails(body)
      .then((result) => {
        setBookDetails(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
        AcceptFriendRequest,
        RejectFriendRequest,
        getFriendsBookList,
        friendsBookList,
        setFriendsBookList,
        getBookDetails,
        bookDetails,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
