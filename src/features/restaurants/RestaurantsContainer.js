import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities);
  
  function handleSubmit(name) {
    dispatch(restaurantAdded(name));
  }

  return (
    <div>
      <RestaurantInput onRestaurantSubmit={handleSubmit}/>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
