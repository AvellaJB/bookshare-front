import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

function Friend({ friendInfo }) {
  return (
    <FriendWrapper>
      <CgProfile /> {friendInfo.pseudo}
    </FriendWrapper>
  );
}

export default Friend;

const FriendWrapper = styled.div`
  background-color: aliceblue;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
    align-items: center;
    margin-right: 10%;
  }
`;
