import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({
        id: uuid(),
        comment: action.payload,
      });
    },
    reviewRemoved(state, action) {
      const index = state.entities.findIndex(
        (res) => res.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    reviewEdited(state, action) {
      const { id, newData } = action.payload;
      const revIndex = state.entities.findIndex((res) => res.id === id);

      if (revIndex !== -1) {
        state.entities[revIndex] = { id, ...newData };
      }
    },
  },
});

// actions export
export const { reviewAdded, reviewRemoved, reviewEdited } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;
