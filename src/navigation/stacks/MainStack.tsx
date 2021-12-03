import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
//
import { HomeScreen, PostScreen } from "../../screens";
//
import { DrawerButton } from "../../components";
//
import names from "../names";

const Stack = createStackNavigator();

export const MainStack = () => {
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
        name={names.Main}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
      <Stack.Screen
        name={names.Post}
        component={PostScreen}
        options={({ route }) => ({
          title: route.params.postTitle,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};
