import React from "react";
//import { AppNavigation } from "./src/navigation/";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { setupStore } from "./src/store";

import { persistStore } from "redux-persist";
import { AppNavigation } from "./src/navigation/";

const store = setupStore();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
