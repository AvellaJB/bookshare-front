import React, { createContext, useContext, useState } from "react";
import services from "./api";
import ISBNApi from "./ISBNApi";

const Context = createContext();

export const StateContext = ({ children }) => {
  //State creation
  const [connected, setConnected] = useState(false);
  const [bookListCurrentUser, setBookListCurrentUser] = useState([]);

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

  return (
    <Context.Provider
      value={{
        connected,
        setConnected,
        fetchAndSetBooks,
        bookListCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
