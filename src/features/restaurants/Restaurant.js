import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved, restaurantEdited } from "./restaurantsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();
  let navigator = useNavigate();

  function handleDelete() {
    dispatch(restaurantRemoved(restaurant.id));
  }

  return (
    <div>
      <li>
        {restaurant.name}
        &nbsp;
        &nbsp;
        <button onClick={handleDelete}> Delete Restaurant </button>
        &nbsp;
        <button onClick={() => navigator(`/edit-restaurant/${restaurant.id}`)}> Edit Restaurant </button>
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
