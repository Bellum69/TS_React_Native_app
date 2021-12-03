import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Alert } from "react-native";
import { useAppDispatch } from "../hooks/redux";
import { mainSlice } from "../store/reducers/newsSlice";
import { s } from "../styles";

interface IAuthorizeInputs {
  username: string;
  password: string;
  isValid: boolean;
}

export const AuthorizeScreen = () => {
  const [inputs, setInputs] = useState<IAuthorizeInputs>({
    username: "",
    password: "",
    isValid: false,
  });
  const dispatch = useAppDispatch();
  const { userSignification } = mainSlice.actions;
  //
  const onPressLogIn = () => {
    validationInputs();

    if (!inputs.isValid) {
      dispatch(userSignification());
    } else {
      validationError();
    }
  };

  const validationInputs = () => {
    if (inputs.password.length >= 8 && inputs.username.length > 1) {
      setInputs({ ...inputs, isValid: true });
    }
  };

  const validationError = () => {
    if (inputs.username.length <= 1) {
      Alert.alert("Alert", "Username field is empty");
    }
    if (inputs.password.length < 8) {
      Alert.alert("Alert", "Password must be minimum 8 characters");
    }
  };
  //
  return (
    <View style={s.center}>
      <TextInput
        style={s.inputs}
        placeholder="username"
        onChangeText={(text) => setInputs({ ...inputs, username: text })}
        defaultValue={inputs.username}
      ></TextInput>
      <TextInput
        secureTextEntry
        style={s.inputs}
        placeholder="password"
        onChangeText={(text) => setInputs({ ...inputs, password: text })}
        defaultValue={inputs.password}
      ></TextInput>
      <Pressable style={s.postDeleteButton} onPress={() => onPressLogIn()}>
        <Text>Log In</Text>
      </Pressable>
    </View>
  );
};
