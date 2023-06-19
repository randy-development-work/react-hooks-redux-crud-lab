import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  const entities = restaurants.map((entity) => <Restaurant key={entity.id} restaurant={entity}/>)
  return (
    <ul>
      {entities}
    </ul>
  );
}

export default Restaurants;
