import React from "react";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const DrawerButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress || {}} onLongPress={onPress || {}}>
      <View style={{ marginHorizontal: 15 }}>
        <FontAwesomeIcon size={30} icon={faFire} color="white" />
      </View>
    </Pressable>
  );
};
