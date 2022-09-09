import React from "react";
import styled from "styled-components";
import { useStateContext } from "../lib/context";
import services from "../lib/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Comment({ commentInfo }) {
  const { currentUserInfo, bookDetails, getBookDetails } = useStateContext();
  const params = useParams();
  const navigate = useNavigate();
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
      <CommentWrapper>
        <Friend onClick={() => navigate(`/${commentInfo.user._id}`)}>
          {commentInfo.user.pseudo} :
        </Friend>
        <CommentStyle>
          <br />
          {commentInfo.comment}
        </CommentStyle>
      </CommentWrapper>
      {DeleteButton}
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  button {
    background-color: #ffc8c8;
    border: none;
    border-radius: 12px;
    padding: 0.2rem;
    margin-left: 3rem;
    cursor: pointer;
  }
`;

const Friend = styled.div`
  font-weight: bold;
  background-color: white;
  cursor: pointer;
`;

const CommentStyle = styled.div`
  font-style: italic;
  background-color: white;
`;

const CommentWrapper = styled.div`
  display: flex;
`;
