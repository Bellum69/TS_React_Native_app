import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { CreateScreen } from "../../screens/CreateScreen";
//
import { DrawerButton } from "../../components";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";
import { PostScreen } from "../../screens";

const Stack = createStackNavigator();

export const CreateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Create}
      screenOptions={{
        headerStyle: {
          backgroundColor: "darkblue",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Create}
        component={CreateScreen}
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
