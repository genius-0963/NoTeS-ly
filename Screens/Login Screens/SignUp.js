import React from "react";
import {
  VStack,
  Button,
  Text,
  HStack,
} from "native-base";
import SignUpForm from "../../Components/SignUpForm";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import { AntDesign } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
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
        <SignUpForm></SignUpForm>
        <HStack style={SignUpFormStyleSheet.SignUpHStack}>
          <Text style={SignUpFormStyleSheet.SignUpHStackText}>
            Already a member?
          </Text>
          <Button
            variant="ghost"
            title="SignIn"
            onPress={() => {
              navigation.navigate("Signin");
            }}
            _text={{
              color: "#775700",
            }}
          >
            Sign In
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default SignUp;