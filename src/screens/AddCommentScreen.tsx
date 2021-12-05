import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { s } from "../styles";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { newsSlice, reselectUsers } from "../store/reducers/newsSlice";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IComment } from "../types";

export const AddCommentScreen = ({ navigation, route }: any) => {
  const { postData } = route.params;
  const storageUsers = useAppSelector(reselectUsers);
  const { addComment } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const [selectedUser, setSelectedUser] = useState<number>(storageUsers[0].id);
  const [inputs, setInputs] = useState({
    name: "",
    body: "",
  });

  const submitComment = () => {
    const indexUser = storageUsers.findIndex(
      (user) => user.id === selectedUser
    );

    const newCommentData: IComment = {
      postId: postData.id,
      id: Date.now(),
      name: inputs.name,
      email: storageUsers[indexUser].email,
      body: inputs.body,
      userId: selectedUser,
      date: new Date(),
    };

    dispatch(addComment(newCommentData));

    navigation.goBack();
    setInputs({
      name: "",
      body: "",
    });
  };

  return (
    <View>
      <Text style={s.createTitle}>Choose user for add new comment</Text>
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
        placeholder="Name comment"
        onChangeText={(text) => setInputs({ ...inputs, name: text })}
        defaultValue={inputs.name}
      ></TextInput>
      <TextInput
        style={s.inputs}
        placeholder="Comment"
        onChangeText={(text) => setInputs({ ...inputs, body: text })}
        defaultValue={inputs.body}
        multiline
      ></TextInput>

      <TouchableOpacity
        activeOpacity={0.8}
        style={s.CreateButton}
        onPress={submitComment}
      >
        <FontAwesomeIcon size={30} icon={faPaperPlane} color="white" />
        <Text style={s.createButtonText}>Add comment</Text>
      </TouchableOpacity>
    </View>
  );
};
