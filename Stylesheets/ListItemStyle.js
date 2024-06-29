import { StyleSheet } from "react-native";

export default StyleSheet.create({
  BannerBox: {
    AspectRatio: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "#ffc529",
    elevation: 20,
    borderRadius: 10
  },
  SubHeading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  SubHeadingBox: {
    width: "50%",
    // alignItems: 'left',
  },
  ViewAllBox: {
    width: "90%",
    // alignItems: 'right',
  },
  AvatarBox: {
    // width: "50%",
    // alignItems: 'right',
  },
  FavoriteBox: {
    width: "100%",
  },
});