import React from "react";
import { HStack, Box, Button, Text, Avatar } from "native-base";
import HomePageStyle from "../StyleSheets/HomePageStyle";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import SettingBoxStyle from "../StyleSheets/SettingBoxStyle";
import { useSelector } from "react-redux";
function HeadingBox({ message }) {

  const nav = useNavigation();
  const avatarPhoto = useSelector(state=>state.ProfilePageReducer.photo)

  return (
    <>
      <HStack
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box style={HomePageStyle.SubHeadingBox}>
          <Text style={SignUpFormStyleSheet.HeadingText}>{message}</Text>
        </Box>
        <Box style={HomePageStyle.AvatarBox}>
          <Button
            style={SettingBoxStyle.hideButton}
            onPress={() => {
              nav.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Avatar
              source={
                avatarPhoto
                  ? { uri: avatarPhoto }
                  : require("../Images/Default_Profle_picture.png")
              }
            />
          </Button>
        </Box>
      </HStack>
    </>
  );
}

export default HeadingBox;