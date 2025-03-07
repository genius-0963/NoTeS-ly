import React from "react";
import { Button, Text, VStack } from "native-base";
import ListItem from "../../Components/ListItem";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import data from "../../Data/dataUpload";
import Searchbar from "../../Components/Searchbar";
import HeadingBox from "../../Components/HeadingBox";
import { AntDesign } from "@expo/vector-icons";

function UserDownloads({ navigation }) {
  return (
    <>
      <Button
        variant="ghost"
        leftIcon={<AntDesign name="leftcircleo" size={24} color="black" />}
        style={SignUpFormStyleSheet.GoBackButton}
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="My Downloads" />
        <Searchbar />
        <ListItem data={data} />
      </VStack>
    </>
  );
}

export default UserDownloads;