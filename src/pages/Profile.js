import React from "react";
import { useStateContext } from "../lib/context";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { Navbar } from "../components";
import { LogoutButton } from "../components";

function Profile() {
  const { currentUserInfo } = useStateContext();

  return (
    <AllWrap>
      <TitleDiv>
        <h1>Mon profil</h1>
      </TitleDiv>
      <ProfileWrapper>
        <div>
          <div>
            <CgProfile />
          </div>
          <div>{currentUserInfo?.pseudo}</div>
          <div>{currentUserInfo?.mail}</div>
        </div>
        <LogoutButton />
      </ProfileWrapper>
      <Navbar />
    </AllWrap>
  );
}

export default Profile;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    font-size: 5rem;
  }
`;

const AllWrap = styled.div`
  width: 100%;
`;

const TitleDiv = styled.div`
  padding: 2rem;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
