import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved, restaurantEdited } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(restaurantRemoved(restaurant.id));
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDelete}> Delete Restaurant </button>
        <br />
        <br />
        <ReviewsContainer restaurantId={restaurant.id} />
        <br />
        <br />
        <br />
      </li>
    </div>
  );
}

export default Restaurant;
