import { useNavigation } from '@react-navigation/native'
import { Text, VStack, Box, Avatar, ScrollView } from 'native-base';
import React from 'react'
import { useSelector } from 'react-redux'
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';
import HeadingBox from '../../Components/HeadingBox';
import InfoDisplay from '../../Components/InfoDisplay';
import { AntDesign } from '@expo/vector-icons';

function ProfileDisplay() {

    const navigation = useNavigation()
    const inputValues = { 
      firstName: useSelector((state) => state.firstName),
      lastName: useSelector((state) => state.lastName),
      institute: useSelector((state) => state.institute),
      branch: useSelector((state) => state.branch),
      photo: useSelector((state) => state.photo)
    };

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
      <ScrollView>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message="Profile" />
          <Box
            style={{
              alignItems: "center",
            }}
          >
            <Avatar
              size="xl"
              source={
                inputValues.photo
                  ? { uri: inputValues.photo }
                  : require("../../Images/Default_Profle_picture.png")
              }
            />
          </Box>
          {Object.entries(inputValues).map(([key, value]) =>
            key !== "photo" ? (
              <InfoDisplay
                info={{
                  label: key,
                  text: value,
                }}
              />
            ) : (
              ""
            )
          )}
        </VStack>
      </ScrollView>
    </>
  );
}

export default ProfileDisplay