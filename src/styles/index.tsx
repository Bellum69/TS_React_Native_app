import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: "100%",
    paddingBottom: 0,
  },
  post: {
    marginBottom: 10,
    alignSelf: "center",
    overflow: "hidden",
    width: "95%",
    borderRadius: 15,
    height: 80,
    backgroundColor: "gray",
  },
  postName: {
    fontSize: 30,
    marginLeft: 5,
  },
  postText: {
    marginLeft: 5,
    fontSize: 15,
  },

  postDeleteButton: {
    backgroundColor: "red",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postTextDeleteButton: {
    color: "white",
    fontSize: 30,
  },
  inputs: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
  },
});
