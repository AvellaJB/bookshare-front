import React from "react";
import { GoBook } from "react-icons/go";
import styled from "styled-components";
import LogoBookShare from "../assets/bookshare-noback.png";

function Logo() {
  return (
    <LogoDiv>
      <img src={LogoBookShare} alt="" />
    </LogoDiv>
  );
}

export default Logo;

const LogoDiv = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 100%;
  }
`;
