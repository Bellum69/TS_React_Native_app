import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ScrollView } from "react-native";
import { newsSlice, reselectUsers } from "../store/reducers/newsSlice";
//
import { API_USERS } from "../config";
import names from "../navigation/names";
import { s } from "../styles";
import { User } from "../components/";
import { IUserWithCustomData } from "../types";

export const UsersScreen = ({ navigation }: any) => {
  const storageUsers = useAppSelector(reselectUsers);
  const { setUsers } = newsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storageUsers.length > 1) {
      return;
    }
    fetch(API_USERS)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
      });
  }, []);

  console.log(storageUsers);

  if (storageUsers.length < 1) return null;

  const onOpen = (userData: IUserWithCustomData): void => {
    navigation.navigate(names.User, {
      userName: userData.name,
      userData: userData,
    });
  };

  const mappedUsers = storageUsers.map((user) => (
    <User key={user.id} userData={user} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedUsers}</ScrollView>;
};
