import React from "react";
import styled from "styled-components";

function Book({ bookDetails }) {
  return (
    <BookWrapper>
      <img
        src={`https://covers.openlibrary.org/b/isbn/${bookDetails.isbn_13}-L.jpg`}
        alt=""
      />
      <p>{bookDetails.title}</p>
    </BookWrapper>
  );
}

export default Book;

const BookWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 200px;
  z-index: 2;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  p {
    font-weight: bold;
    font-size: 0.7rem;
  }
`;
