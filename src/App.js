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

  
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);
  
  const [restaurants, setRestaurants] = useState([])

  const lols = useSelector((state) => state.restaurants.restaurants);
  useEffect(() => {
    if(lols){
      setRestaurants(()=> lols)
    }
  },[lols])

  console.log("restState", restaurants);

  console.log(useSelector((state) => state.restaurants));

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
          element={<EditRestaurant restaurants={restaurants}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
