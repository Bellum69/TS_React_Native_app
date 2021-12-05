import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { s } from "../styles";
import { API_USERS } from "../config";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { newsSlice, reselectUsers } from "../store/reducers/newsSlice";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import moment from "moment";
import { IPost } from "../types";
import names from "../navigation/names";

export const CreateScreen = ({ navigation }: any) => {
  const storageUsers = useAppSelector(reselectUsers);
  const { setUsers, addPost } = newsSlice.actions;
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

  if (storageUsers.length < 1) return null;
  const [selectedUser, setSelectedUser] = useState<number>(storageUsers[0].id);
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const onOpen = (PostData: IPost): void => {
    navigation.navigate(names.Post, {
      postTitle: PostData.title,
      postData: PostData,
    });
  };

  const submitPost = () => {
    const newPostData: IPost = {
      userId: selectedUser,
      id: Date.now(),
      title: inputs.title,
      body: inputs.body,
      date: moment(new Date()).format("MMM Do YY"),
      views: 0,
    };
    dispatch(addPost(newPostData));
    setInputs({
      title: "",
      body: "",
    });
    onOpen(newPostData);
  };

  return (
    <View>
      <Text style={s.createTitle}>Choose user and create new post</Text>
      <Picker
        selectedValue={selectedUser}
        onValueChange={(itemValue) => setSelectedUser(itemValue)}
        style={s.picker}
      >
        {storageUsers.map((user) => {
          return (
            <Picker.Item
              key={user.id}
              label={`User - ${user.id}`}
              value={user.id}
            />
          );
        })}
      </Picker>
      <TextInput
        style={s.inputs}
        placeholder="Title"
        onChangeText={(text) => setInputs({ ...inputs, title: text })}
        defaultValue={inputs.title}
      ></TextInput>
      <TextInput
        style={s.inputs}
        placeholder="Add story"
        onChangeText={(text) => setInputs({ ...inputs, body: text })}
        defaultValue={inputs.body}
        multiline
      ></TextInput>

      <TouchableOpacity
        activeOpacity={0.8}
        style={s.CreateButton}
        onPress={submitPost}
      >
        <FontAwesomeIcon size={30} icon={faPaperPlane} color="white" />
        <Text style={s.createButtonText}>Create post</Text>
      </TouchableOpacity>
    </View>
  );
};
