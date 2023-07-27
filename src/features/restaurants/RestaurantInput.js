import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";
import { createRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createRestaurant({name: name}));
    // setName({name:""});
    // alert("New Restaurant Added...")
    event.target.reset()
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter restaurant name"
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Add Restaurant" />
    </form>
  );
}

export default RestaurantInput;
