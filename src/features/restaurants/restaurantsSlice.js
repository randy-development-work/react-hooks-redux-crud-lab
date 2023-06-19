import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action){
      state.entities.push({
        id: uuid(),
        name: action.payload,
      });
    },
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex((restaurant) => restaurant.id === action.payload);
      state.entities.splice(index, 1);
    },
    restaurantEdited(state, action) {
      state.entities[action.payload.id] = action.payload.name;
    },
  },
});

export const { restaurantAdded, restaurantRemoved, restaurantEdited } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
