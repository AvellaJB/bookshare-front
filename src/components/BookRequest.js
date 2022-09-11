import React from "react";
import styled from "styled-components";
import { HiOutlineUserAdd, HiOutlineCheck } from "react-icons/hi";
import { MdScheduleSend, MdOutlineClose } from "react-icons/md";
import { useStateContext } from "../lib/context";

function BookRequest({ requestInfo }) {
  const { acceptBorrowRequest, rejectBorrowRequest } = useStateContext();

  const body = {
    borrower: requestInfo.borrower._id,
    book: requestInfo.book._id,
    owner: requestInfo.book.user,
  };

  let StatusResult;
  let ActionButtons;
  if (requestInfo.status === 1) {
    StatusResult = <p>Souhaite vous emprunter</p>;
    ActionButtons = (
      <div>
        <MdOutlineClose
          onClick={() => {
            rejectBorrowRequest(body);
          }}
        />
        <HiOutlineCheck
          onClick={() => {
            acceptBorrowRequest(body);
          }}
        />
      </div>
    );
  } else if (requestInfo.status === 2) {
    StatusResult = <p>Demande envoyée</p>;
    ActionButtons = (
      <div>
        <MdScheduleSend />
      </div>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>{requestInfo.borrower.pseudo}</h3>
        {StatusResult}
        <img
          src={`https://covers.openlibrary.org/b/isbn/${requestInfo.book.ISBN}-L.jpg`}
          alt=""
        />
      </div>
      {ActionButtons}
    </Wrapper>
  );
}

export default BookRequest;

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    margin: 1rem;
    svg {
      background-color: transparent;
      font-size: 2rem;
    }
  }
  h3 {
    background-color: transparent;
  }
  p {
    background-color: transparent;
    font-size: 0.7rem;
  }
  img {
    height: 150px;
    width: 100px;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
