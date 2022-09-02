import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useStateContext } from "../lib/context";

function Friend({ friendInfo }) {
  const { friendList } = useStateContext();

  const isInFriendList = friendList.find((o) => o._id === friendInfo._id);

  return (
    <FriendWrapper>
      <InteriorDiv>
        <CgProfile /> {friendInfo.pseudo}
        {!isInFriendList && <HiOutlineUserAdd />}
      </InteriorDiv>
    </FriendWrapper>
  );
}

export default Friend;

const FriendWrapper = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1rem;
  svg {
    font-size: 2rem;
    background-color: aliceblue;
  }
`;

const InteriorDiv = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
