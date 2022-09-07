import React from "react";
import styled from "styled-components";
import { useStateContext } from "../lib/context";
import services from "../lib/api";
import { useParams } from "react-router-dom";

function Comment({ commentInfo }) {
  const { currentUserInfo, bookDetails, getBookDetails } = useStateContext();
  const params = useParams();
  let DeleteButton;

  if (
    currentUserInfo._id === commentInfo.user._id ||
    bookDetails.user._id === currentUserInfo._id
  ) {
    DeleteButton = (
      <button
        onClick={() => {
          services
            .DeleteComment({ commentId: commentInfo._id })
            .then((res) => getBookDetails({ bookId: params.id }));
        }}
      >
        Delete
      </button>
    );
  }

  return (
    <Wrapper>
      <Friend>{commentInfo.user.pseudo}</Friend>
      <CommentStyle>{commentInfo.comment}</CommentStyle>
      {DeleteButton}
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  padding: 0.3rem;
  background-color: aliceblue;
  border-radius: 12px;
  margin-bottom: 0.5rem;
`;

const Friend = styled.div`
  font-weight: bold;
  background-color: aliceblue;
`;

const CommentStyle = styled.div`
  font-style: italic;
  background-color: aliceblue;
`;
