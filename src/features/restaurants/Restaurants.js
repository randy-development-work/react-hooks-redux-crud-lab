import React from "react";

function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((rest) => {
        <li key={rest.id}>
          {rest.name}
          <button>Delete Restaurant</button>
        </li>
      })}
    </ul>
  );
}

export default Restaurants;
