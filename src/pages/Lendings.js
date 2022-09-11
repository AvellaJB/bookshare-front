import React from "react";
import { BookTrackingList, Navbar } from "../components";
import { useStateContext } from "../lib/context";
import { BookRequestList } from "../components";
import styled from "styled-components";
import { useState } from "react";
function Lendings() {
  const { currentUserInfo } = useStateContext();

  const [underLineKeepTrack, setUnderLineKeepTrack] = useState("underline");
  const [underLineRequest, setUnderLineRequest] = useState("");

  let view;
  if (underLineKeepTrack === "underline") {
    view = <BookTrackingList />;
  } else if (underLineRequest === "underline") {
    view = <BookRequestList />;
  }

  return (
    <div>
      <Titles>
        <h2
          style={{ textDecoration: underLineRequest }}
          onClick={() => {
            setUnderLineRequest("underline");
            setUnderLineKeepTrack("");
          }}
        >
          Mes demandes
        </h2>{" "}
        <h2
          style={{ textDecoration: underLineKeepTrack }}
          onClick={() => {
            setUnderLineRequest("");
            setUnderLineKeepTrack("underline");
          }}
        >
          Mon suivi
        </h2>
      </Titles>
      {view}
      <Navbar />
    </div>
  );
}

export default Lendings;

const Titles = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
