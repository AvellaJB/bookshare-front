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
  const [oneUserDetails, setOneUserDetails] = useState(true);
  const [bookRequests, setBookRequests] = useState([]);
  const [bookTracking, setBookTracking] = useState([]);
  const [isLoadingTracking, setLoadingTrackingList] = useState(true);
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

  async function getOneUserDetails(body) {
    await services
      .getOneUser(body)
      .then((result) => {
        setOneUserDetails(result);
      })
      .catch((err) => console.log(err));
  }

  async function DeleteBook(id) {
    await services
      .deleteBook(id)
      .then((res) => fetchAndSetBooks())
      .catch((err) => console.log(err));
  }

  async function getBookRequests(currentUser) {
    await services
      .getBookRequestList(currentUser)
      .then((res) => setBookRequests(res))
      .catch((err) => console.log(err));
  }

  async function acceptBorrowRequest(body) {
    await services
      .acceptBorrowRequest(body)
      .then((res) => getBookRequests(currentUserInfo._id))
      .catch((err) => console.log(err));
  }
  async function rejectBorrowRequest(body) {
    await services
      .rejectBorrowRequest(body)
      .then((res) => getBookRequests(currentUserInfo._id))
      .catch((err) => console.log(err));
  }

  async function getBorrowedLendedBooks(body) {
    await services
      .getBorrowedLendedBooks(body)
      .then((res) => {
        setBookTracking(res);
        setLoadingTrackingList(false);
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
        getOneUserDetails,
        oneUserDetails,
        DeleteBook,
        getBookRequests,
        bookRequests,
        acceptBorrowRequest,
        rejectBorrowRequest,
        getBorrowedLendedBooks,
        bookTracking,
        isLoadingTracking,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
