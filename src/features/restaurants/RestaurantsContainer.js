import React, { useEffect } from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "./restaurantsSlice";

function RestaurantsContainer({restaurants}) {
  console.log(restaurants);

  return (
    <div>
      <RestaurantInput />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
