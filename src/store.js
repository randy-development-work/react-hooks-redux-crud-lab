import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import restaurantsReducer from "./features/restaurants/restaurantsSlice";
import reviewsReducer from "./features/reviews/reviewsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,
  },
});

const persistor = persistStore(store);

// export { store, persistor };

export default store;
