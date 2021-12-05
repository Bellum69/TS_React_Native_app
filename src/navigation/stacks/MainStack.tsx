import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
//
import {
  AddCommentScreen,
  ChangePostScreen,
  HomeScreen,
  PostScreen,
} from "../../screens";
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
      <Stack.Screen
        name={names.AddComment}
        component={AddCommentScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={names.ChangePost}
        component={ChangePostScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
