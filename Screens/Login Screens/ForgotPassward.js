import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  VStack,
  Text,
} from "native-base";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { passwordReset } from "../../Redux/Actions/SignUpLoginAction";

const ForgotPassword = ({ navigation }) => {

  const [ ForgotPasswordEmail, setForgotPasswordEmail ] = useState({})

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(passwordReset(ForgotPasswordEmail))
    console.log('Submitted', ForgotPasswordEmail)
  }

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
      <VStack space={10} style={SignUpFormStyleSheet.SignUpVStack}>
        <VStack style={SignUpFormStyleSheet.VStackStyle} space={3}>
          <Text style={SignUpFormStyleSheet.HeadingText}>Forgot Password</Text>
          <Text style={SignUpFormStyleSheet.HeadingSubText}>
            Send code on email
          </Text>
          {/* Email */}
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "lg",
                color: "black",
              }}
            >
              Email Id
            </FormControl.Label>

            <Input
              borderBottomColor="#775700"
              variant="underlined"
              name="emailID"
              onChangeText={(value) =>
                setForgotPasswordEmail({ ...ForgotPasswordEmail, value })
              }
            />
          </FormControl>
          <Button
            style={SignUpFormStyleSheet.CreateAccButton}
            _text={{
              color: "black",
              fontWeight: 500,
            }}
            onPress={onSubmit}
          >
            Send email
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default ForgotPassword;