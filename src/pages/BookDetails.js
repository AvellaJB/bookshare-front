import React from "react";
import { useEffect, useState } from "react";
import { useStateContext } from "../lib/context";
import { useParams } from "react-router-dom";
import ISBNApi from "../lib/ISBNApi";
import styled from "styled-components";
import {
  Comment,
  CommentInput,
  Navbar,
  ReviewInput,
  BorrowButton,
} from "../components";

function BookDetails() {
  const [openLibrary, setOpenLibrary] = useState();
  const { bookDetails, getBookDetails, isLoading, currentUserInfo } =
    useStateContext();
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

  let userReview;
  if (currentUserInfo._id === bookDetails.user._id) {
    userReview = <ReviewInput bookDetails={bookDetails} />;
  }

  let friendList = bookDetails?.user.friends;
  const isFriend = friendList.find((friend) => friend === currentUserInfo._id);

  let InputComment;

  if (isFriend || bookDetails.user._id === currentUserInfo._id) {
    InputComment = <CommentInput bookDetails={bookDetails} />;
  }

  let BorrowBtn;

  if (
    bookDetails?.book_status === undefined ||
    bookDetails?.book_status === 1
  ) {
    BorrowBtn = <BorrowButton />;
  } else {
    BorrowBtn = <UnavailableButton>Livre indisponible.</UnavailableButton>;
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
          {openLibrary.number_of_pages && (
            <span>{openLibrary.number_of_pages} pages.</span>
          )}
        </BookDetailsInfos>
      </BookWrapper>
      <BorrowButtonDiv>{BorrowBtn}</BorrowButtonDiv>
      <Proprio>
        <h2>{bookDetails.user.pseudo}</h2>
      </Proprio>
      <ReviewStyle>
        <div className="reviewTitle">Mon avis sur ce livre: </div>
        <div className="reviewUser">{bookDetails.userReview}</div>
      </ReviewStyle>
      {userReview}
      {bookDetails.comments.map((comment) => {
        return <Comment commentInfo={comment} key={comment._id} />;
      })}
      {InputComment}
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
  @media screen and (min-width: 1200px) {
    justify-content: center;
    padding: 2rem;
  }
`;

const BookCover = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 1200px) {
    width: auto;
    img {
      height: 250px;
      width: auto;
    }
    background-color: transparent;
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
  @media screen and (min-width: 1200px) {
    width: auto;
    img {
      height: 250px;
      width: auto;
    }
    background-color: transparent;
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

const UnavailableButton = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: none;
  background-color: #ffc8c8;
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
  width: 10%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`;

const BorrowButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
