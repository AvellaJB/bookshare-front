import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserAdd, HiOutlineCheck } from "react-icons/hi";
import { MdScheduleSend } from "react-icons/md";
import { useStateContext } from "../lib/context";
import services from "../lib/api";

function FriendResponse({ friendInfo }) {
  return (
    <FriendWrapper>
      <InteriorDiv>
        <CgProfile /> {friendInfo.pseudo || friendInfo.recipient.pseudo}
        {friendInfo.status === 2 && <HiOutlineCheck />}
        {friendInfo.status === 1 && <MdScheduleSend />}
      </InteriorDiv>
    </FriendWrapper>
  );
}

export default FriendResponse;

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
