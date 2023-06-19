import React from "react";
import { reviewRemoved } from "./reviewsSlice";
import { useDispatch } from "react-redux";

function Review({ review }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(reviewRemoved(review.id))
  }
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleDelete}> Delete Review </button>
    </div>
  );
}

export default Review;
