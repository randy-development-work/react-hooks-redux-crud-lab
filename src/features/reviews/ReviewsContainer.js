import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector, useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurant }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities);

  function onReviewSubmit(name) {
    dispatch(reviewAdded(name, restaurant.id));
  }

  return (
    <div>
      <ReviewInput onReviewSubmit={onReviewSubmit} restaurant={restaurant} />
      <Reviews reviews={reviews}/>
    </div>
  );
}

export default ReviewsContainer;
