import React, { useState } from "react";

function RestaurantInput({ onRestaurantSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onRestaurantSubmit(name);
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter restaurant name"
            onChange={handleInputChange}
            required
          />
        </label>
        <input type="submit" value= "Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
