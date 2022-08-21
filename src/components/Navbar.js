import React from "react";
import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiLibrary } from "react-icons/bi";
import { FaExchangeAlt, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

//Ajouter le trade ID pour savoir si la page de quel utilisateur
//On doit emmené l'utilsizateur.

function Navbar() {
  return (
    <NavBar>
      <div>
        <Link to="/home">
          <BiLibrary />
        </Link>
      </div>
      <div>
        <Link to="/trade">
          <FaExchangeAlt />
        </Link>
      </div>
      <div>
        <Link to="/friends">
          <FaUserFriends />
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <CgProfile />
        </Link>
      </div>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
