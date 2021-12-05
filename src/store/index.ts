import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import news from "./reducers/newsSlice";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["news"],
};

const rootReducer = combineReducers({
  news,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
