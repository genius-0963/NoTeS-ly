import React from "react";
import { VStack, Button, Text, HStack } from "native-base";
import SignInForm from "../../Components/SignInForm";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import { AntDesign } from "@expo/vector-icons";

const Signin = ({ navigation }) => {
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
        <SignInForm></SignInForm>
        <HStack style={SignUpFormStyleSheet.SignUpHStack}>
          <Text style={SignUpFormStyleSheet.SignUpHStackText}>
            Don't have an account?
          </Text>
          <Button
            variant="ghost"
            title="SignIn"
            onPress={() => {
              navigation.navigate("Signup");
            }}
            _text={{
              color: "#775700",
            }}
          >
            Sign Up
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Signin;