import React from "react";
import { reviewRemoved } from "./reviewsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Review({ review }) {
  const dispatch = useDispatch();
  let navigator = useNavigate();

  function handleDelete() {
    dispatch(reviewRemoved(review.id))
  }
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleDelete}> Delete Review </button>
      &nbsp;
      <button onClick={() => navigator(`/review-edit/${review.id}`)}> Edit Review </button>
    </div>
  );
}

export default Review;
