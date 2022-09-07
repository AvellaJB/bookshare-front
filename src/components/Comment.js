import React from "react";
import styled from "styled-components";
import { useStateContext } from "../lib/context";
import services from "../lib/api";

function Comment({ commentInfo }) {
  const { currentUserInfo } = useStateContext();

  let DeleteButton;

  if (currentUserInfo._id === commentInfo.user._id) {
    DeleteButton = (
      <button
        onClick={() => {
          services
            .DeleteComment({ commentId: commentInfo._id })
            .then((res) => console.log(res));
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
