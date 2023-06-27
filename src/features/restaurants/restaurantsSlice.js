import { v4 as uuid } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_BASE_URL from "../../utilities/env";
import axios from "axios";

// export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", () => {
//   return fetch(`${API_BASE_URL}/restaurants`)
//   .then(response => response.json)
//   .then(data => data)
// });

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/restaurants`);
    return response.data;
  }
);

export const updateRestaurant = createAsyncThunk(
  "restaurant/updateRestaurant",
  async ({ id, name }) => {
    const response = await axios.patch(`${API_BASE_URL}/restaurants/${id}`, {
      name,
    });
    return response.data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
    status: "idle",
    error: null,
  },

  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({
        id: uuid(),
        name: action.payload,
      });
    },
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex(
        (restaurant) => restaurant.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    restaurantEdited(state, action) {
      // state.entities[action.payload.id] = action.payload.name;
      const { id, name } = action.payload;
      const restaurant = state.entities.find((r) => r.id === id);
      if (restaurant) {
        restaurant.name = name;
        // localStorage.setItem('restaurants', JSON.stringify(state.entities));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { restaurantAdded, restaurantRemoved, restaurantEdited } =
  restaurantsSlice.actions;

export default restaurantsSlice.reducer;
