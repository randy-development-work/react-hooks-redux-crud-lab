import React, { useState } from "react";
import { reviewAdded } from "./reviewsSlice";
import { useDispatch } from "react-redux";

function ReviewInput({ restaurantId }) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(reviewAdded({ comment, restaurantId }));
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <br />
        <textarea
          name="comment"
          onChange={handleInputChange}
          value={comment}
          placeholder="Enter your Review..."
        />
      </label>
      <br />
      <input type="submit" value="Add Review" />
      <br />
      <br />
    </form>
  );
}

export default ReviewInput;
