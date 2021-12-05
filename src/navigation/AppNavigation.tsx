import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerMain } from "../components/DrawerMain";

//
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCode,
  faBullhorn,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
//

import names from "./names";
import { MainStack, AboutStack, CreateStack, UserStack } from "./stacks";
import { width } from "../styles";

//

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={names.Main}
      drawerStyle={{
        width: width - 56,
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "darkblue",
        inactiveTintColor: "black",
        labelStyle: { fontSize: 24 },
      }}
      drawerContent={(props) => <DrawerMain {...props} />}
    >
      <Drawer.Screen
        name={names.Main}
        component={MainStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={names.Users}
        component={UserStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faUserAlt}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={names.Create}
        component={CreateStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faBullhorn}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={names.AboutApp}
        component={AboutStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faCode}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
