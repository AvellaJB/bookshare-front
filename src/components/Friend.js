import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserAdd, HiOutlineCheck } from "react-icons/hi";
import { MdScheduleSend, MdOutlineClose } from "react-icons/md";
import { useStateContext } from "../lib/context";
import services from "../lib/api";

function Friend({ friendInfo }) {
  const {
    friendList,
    currentUserInfo,
    friendRequestList,
    AcceptFriendRequest,
    RejectFriendRequest,
  } = useStateContext();

  const isInFriendList = friendList.find((o) => o._id === friendInfo._id);
  const isSearchResultInFriendRequest = friendRequestList.find(
    (o) => o.recipient._id === friendInfo._id
  );
  const isInFriendRequest = friendRequestList.find(
    (o) => o._id === friendInfo._id
  );
  const body = {
    requester: currentUserInfo._id,
    recipient: friendInfo._id,
  };

  const bodyForFriendRequestAccept = {
    requester: currentUserInfo._id,
    recipient: friendInfo.recipient?._id,
  };

  let ActionButton;
  let RejectFriend;

  if (isSearchResultInFriendRequest?.status === 1) {
    ActionButton = <MdScheduleSend />;
  } else if (isInFriendRequest?.status === 1) {
    ActionButton = <MdScheduleSend />;
  } else if (isInFriendRequest?.status === 2) {
    ActionButton = (
      <HiOutlineCheck
        onClick={() => AcceptFriendRequest(bodyForFriendRequestAccept)}
      />
    );
    RejectFriend = (
      <MdOutlineClose
        onClick={() => RejectFriendRequest(bodyForFriendRequestAccept)}
      />
    );
  } else if (isSearchResultInFriendRequest) {
    ActionButton = <HiOutlineCheck onClick={() => AcceptFriendRequest(body)} />;
    RejectFriend = <MdOutlineClose onClick={() => RejectFriendRequest(body)} />;
  } else if (!isInFriendList) {
    ActionButton = (
      <HiOutlineUserAdd
        onClick={() => {
          services.FriendRequest(body);
        }}
      />
    );
  }

  return (
    <FriendWrapper>
      <InteriorDiv>
        <CgProfile /> {friendInfo.pseudo || friendInfo.recipient.pseudo}
        {ActionButton}
        {RejectFriend}
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
