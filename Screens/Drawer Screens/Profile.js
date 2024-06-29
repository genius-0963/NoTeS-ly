import React from 'react'
import { VStack, Avatar, Box, ScrollView, Button, KeyboardAvoidingView } from "native-base";
import HeadingBox from "../../Components/HeadingBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import InputField from '../../Components/InputField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as DocumentPicker from 'expo-document-picker'
import SettingBoxStyle from '../../StyleSheets/SettingBoxStyle';
import { addPhoto } from '../../Redux/Actions/ProfilePageActions';



//Issues
// 1. On submit redirect to Saved info page
// 2. This page visible only when edit button is clicked
// 3. Remove the side bar when on this page
// 4. Add whatsapp transition

function Profile() {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState('')
  const inputValues = {
    firstName: useSelector((state) => state.ProfilePageReducer.firstName),
    lastName: useSelector((state) => state.ProfilePageReducer.lastName),
    institute: useSelector((state) => state.ProfilePageReducer.institute),
    branch: useSelector((state) => state.ProfilePageReducer.branch),
  };

  const onSubmit = () => {
    console.log(inputValues)
  }

  const [photo, setPhoto] = useState()
  const onView = async () => {
    let uploadPhoto = await DocumentPicker.getDocumentAsync({})
    setPhoto(uploadPhoto.uri)
    dispatch(addPhoto(uploadPhoto.uri))
  }

  return (
    <>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        extraHeight={80} 
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message=" Edit Profile" />
          <Box
            style={{
              alignItems: "center",
            }}
          >
            <Button style={SettingBoxStyle.hideButton} onPress={onView}>
              <Avatar size="xl" source={photo ? { uri: photo }: require('../../Images/Default_Profle_picture.png')} />
            </Button>
          </Box>
          <InputField label="First name" />
          <InputField label="Last name" />
          <InputField label="Institute" />
          <InputField label="Branch" />
          <Button
            style={[
              SignUpFormStyleSheet.CreateAccButton,
              {
                alignSelf: "center",
              },
            ]}
            onPress={onSubmit}
            _text={{
              color: "black",
              fontWeight: 500,
            }}
          >
            Save
          </Button>
        </VStack>
      </KeyboardAwareScrollView>
    </>
  );
}

export default Profile;