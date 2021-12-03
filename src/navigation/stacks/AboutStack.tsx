import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
//
import { AboutScreen } from "../../screens";
//
import { DrawerButton } from "../../components";
//
import names from "../names";

const Stack = createStackNavigator();

export const AboutStack = () => {
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
        name={names.AboutApp}
        component={AboutScreen}
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
