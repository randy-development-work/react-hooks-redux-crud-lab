import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  console.log("reviews", reviews);
  return (
    <ul>
      {reviews.map((rev) => (
        <Review key={rev.id} review={rev} />
      ))}
    </ul>
  );
}

export default Reviews;
