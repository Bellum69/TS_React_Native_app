import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { UserScreen, PostScreen } from "../../screens/";
//
import { DrawerButton } from "../../components";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";

const Stack = createStackNavigator();

export const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.User}
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.User}
        component={UserScreen}
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
          title: route.params.postId,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};
