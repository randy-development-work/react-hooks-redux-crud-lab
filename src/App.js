import React from "react";
import RestaurantsContainer from "./features/restaurants/RestaurantsContainer";
import { Route, Routes, Outlet } from "react-router-dom";
import EditRestaurant from "./features/restaurants/EditRestaurant";
import EditReview from "./features/reviews/EditReview";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RestaurantsContainer />} />
        <Route path="/edit-restaurant/:restaurantID" element={<EditRestaurant />} />
        <Route path="/review-edit/:reviewID" element={<EditReview />} />
      </Routes>
    </div>
  );
}

export default App;
