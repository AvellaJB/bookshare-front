import React from "react";
import { useEffect, useState } from "react";
import { useStateContext } from "../lib/context";
import { useParams } from "react-router-dom";
import ISBNApi from "../lib/ISBNApi";
import styled from "styled-components";
import { Comment, CommentInput, Navbar } from "../components";

function BookDetails() {
  const [openLibrary, setOpenLibrary] = useState();
  const { bookDetails, getBookDetails, isLoading } = useStateContext();
  const [ISBNStillLoading, setISBNLoading] = useState(true);
  const params = useParams();

  function fetchOpenLibraryInfo() {
    ISBNApi.getDetailsFromISBN(params.isbn)
      .then((result) => {
        setOpenLibrary(result);
        setISBNLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getBookDetails({ bookId: params.id });
    fetchOpenLibraryInfo();
  }, []);

  if (isLoading || ISBNStillLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <BookWrapper>
        <BookCover>
          <img
            src={`https://covers.openlibrary.org/b/isbn/${openLibrary.isbn_13}-L.jpg`}
            alt=""
          />
        </BookCover>
        <BookDetailsInfos>
          <span>{openLibrary.title}</span>
        </BookDetailsInfos>
      </BookWrapper>

      <Proprio>
        <h2>{bookDetails.user.pseudo}</h2>
      </Proprio>
      <div>Mon avis sur ce livre: </div>
      <div>{bookDetails.userReview}</div>
      <CommentInput />
      {bookDetails.comments.map((comment) => {
        return <Comment commentInfo={comment} key={comment._id} />;
      })}
      <Navbar />
    </Wrapper>
  );
}

export default BookDetails;

const Wrapper = styled.div`
  padding: 1rem;
`;

const BookWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
`;

const BookCover = styled.div`
  background-color: aliceblue;
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BookDetailsInfos = styled.div`
  width: 70%;
  background-color: blue;
  padding: 1rem;
`;

const Proprio = styled.div`
  text-align: center;
`;
