import React from "react";
import { useState } from "react";
import services from "../lib/api";
import { useStateContext } from "../lib/context";
import { useParams } from "react-router-dom";

function ReviewInput({ bookDetails }) {
  const params = useParams();
  const [value, setValue] = useState("");
  const { currentUserInfo, getBookDetails } = useStateContext();

  function getFormValue(elements, name) {
    return elements[name]?.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const review = getFormValue(elements, "review");
    if (!review) {
      alert("Ajouter votre revue");
      return;
    }
    const body = {
      id: bookDetails._id,
      userReview: review,
    };

    services.reviewBook(body).then((res) => {
      getBookDetails({ bookId: params.id });
      setValue("");
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="review"
          placeholder="Mon avis"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
}

export default ReviewInput;
