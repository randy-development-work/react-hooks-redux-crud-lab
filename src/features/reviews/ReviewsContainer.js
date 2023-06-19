import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurant }) {
  return (
    <div>
      <ReviewInput />
      <Reviews />
    </div>
  );
}

export default ReviewsContainer;
