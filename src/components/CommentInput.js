import React from "react";
import { useState } from "react";
import services from "../lib/api";

function CommentInput() {
  const [value, setValue] = useState("");

  function getFormValue(elements, name) {
    return elements[name]?.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const comment = getFormValue(elements, "comment");
    if (!comment) {
      alert("Ajouter un commentaire");
      return;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          placeholder="Commentaire"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
}

export default CommentInput;
