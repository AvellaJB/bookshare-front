import React from "react";
import styled from "styled-components";

function Comment({ commentInfo }) {
  return (
    <Wrapper>
      <Friend>{commentInfo.user.pseudo}</Friend>
      <CommentStyle>{commentInfo.comment}</CommentStyle>
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
