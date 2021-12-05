import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { UsersScreen, PostScreen, UserPostsScreen } from "../../screens";
//
import { DrawerButton } from "../../components";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";

const Stack = createStackNavigator();

export const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Users}
      screenOptions={{
        headerStyle: {
          backgroundColor: "darkblue",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Users}
        component={UsersScreen}
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
        name={names.User}
        component={UserPostsScreen}
        options={({ route, navigation }) => ({
          title: route.params.userName,
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
