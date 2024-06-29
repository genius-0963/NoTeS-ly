import { AspectRatio } from "native-base";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  HeadBoxStyle: {
    borderColor: "gray",
    borderWidth: 0.5,
    margin: 5,
    padding: 10,
    justifyContent: "center",
  },
  ImageBox: {
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
  },
  TextBox: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center"
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});