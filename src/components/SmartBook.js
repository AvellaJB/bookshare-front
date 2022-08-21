import React, { useEffect } from "react";
import ISBNApi from "../lib/ISBNApi";
import { useState } from "react";
import Book from "./Book";

function SmartBook({ ISBN }) {
  const [book, setBook] = useState([]);

  function fetchOpenLibraryInfo() {
    ISBNApi.getDetailsFromISBN(ISBN)
      .then((result) => setBook(result))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchOpenLibraryInfo();
  }, []);

  return <Book bookDetails={book} />;
}

export default SmartBook;
