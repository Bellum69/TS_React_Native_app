import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
//
import { AuthorizeScreen } from "../../screens";
//
import { DrawerButton } from "../../components";
//
import names from "../names";

const Stack = createStackNavigator();

export const AuthorizeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Main}
      screenOptions={{
        headerStyle: {
          backgroundColor: "darkblue",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Auth}
        component={AuthorizeScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
