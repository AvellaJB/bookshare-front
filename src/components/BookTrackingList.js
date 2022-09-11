import React from "react";
import { useEffect } from "react";
import { useStateContext } from "../lib/context";
import { BookLended, BookBorrowed } from "../components";
function BookTrackingList() {
  const {
    getBorrowedLendedBooks,
    currentUserInfo,
    bookTracking,
    isLoadingTracking,
  } = useStateContext();

  useEffect(() => {
    getBorrowedLendedBooks({ currentUser: currentUserInfo._id });
  }, []);

  if (isLoadingTracking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Mes livres prêtés</h1>
        {bookTracking?.books_lended.map((book) => {
          return <BookLended bookInfo={book} key={bookTracking._id} />;
        })}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Mes livres empruntés</h1>
        {bookTracking?.books_borrowed.map((book) => {
          return <BookBorrowed bookInfo={book} key={bookTracking._id} />;
        })}
      </div>
    </div>
  );
}

export default BookTrackingList;
