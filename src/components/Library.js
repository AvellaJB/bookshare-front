import React from "react";
import { useEffect } from "react";
import { useStateContext } from "../lib/context";
import SmartBook from "./SmartBook";
import styled from "styled-components";

function Library({ bookListCurrentUser }) {
  return (
    <LibraryWrapper>
      {bookListCurrentUser?.map((book) => {
        return (
          <div>
            <SmartBook
              ISBN={book.ISBN}
              key={book._id}
              owner={book.user}
              bookId={book._id}
            />
          </div>
        );
      })}
    </LibraryWrapper>
  );
}

export default Library;

const LibraryWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0.2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;
