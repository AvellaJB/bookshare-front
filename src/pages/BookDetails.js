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
          <span className="title">{openLibrary.title}</span>
          <span>{openLibrary.number_of_pages} pages.</span>
        </BookDetailsInfos>
      </BookWrapper>

      <Proprio>
        <h2>{bookDetails.user.pseudo}</h2>
      </Proprio>
      <ReviewStyle>
        <div className="reviewTitle">Mon avis sur ce livre: </div>
        <div className="reviewUser">{bookDetails.userReview}</div>
      </ReviewStyle>
      <CommentInput bookDetails={bookDetails} />
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
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BookDetailsInfos = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
  }
`;

const Proprio = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ReviewStyle = styled.div`
  margin-bottom: 1rem;
  .reviewTitle {
    font-weight: bold;
  }
  .reviewUser {
    margin-top: 1rem;
  }
`;
