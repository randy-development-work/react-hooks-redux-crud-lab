import React, { useState } from "react";
import Reviews from "./Reviews";

function ReviewInput({ onReviewSubmit }) {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onReviewSubmit(comment);
    setComment("");
  }

  function handleInputChange(event) {
    setComment(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <textarea
          name="comment"
          onChange={handleInputChange}
          value={comment}
          placeholder="Enter your Review..."
        />
      </label>
      <input type="submit" value="Add Review" />
    </form>
  );
}

export default ReviewInput;
