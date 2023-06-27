import React, { useEffect, useState } from "react";
import RestaurantsContainer from "./features/restaurants/RestaurantsContainer";
import { Route, Routes, Outlet } from "react-router-dom";
import EditRestaurant from "./features/restaurants/EditRestaurant";
import EditReview from "./features/reviews/EditReview";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./features/restaurants/restaurantsSlice";

function App() {
  const dispatch = useDispatch();
  const entities = useSelector((state) => state.restaurants.entities);

  const [restaurants, setRestaurants] = useState(entities)
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <RestaurantsContainer restaurants={restaurants} />
              <Outlet />
            </div>
          }
        >
          <Route path="/review-edit/:reviewID" element={<EditReview />} />
        </Route>
        <Route
          path="/edit-restaurant/:restaurantID"
          element={<EditRestaurant restaurants={restaurants} setRestaurants={setRestaurants}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
