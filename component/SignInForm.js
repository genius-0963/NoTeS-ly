import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  VStack,
  Text,
  Icon,
  Pressable,
  HStack,
} from "native-base";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import { MaterialIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { authenticationLogin } from "../Redux/Actions/SignUpLoginAction";

const SignInForm = () => {
  const [formData, setData] = useState({
    name: "",
    emailID: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const onSubmit = async () => {
    dispatch(authenticationLogin(formData))
  };

  return (
    <>
      <VStack style={SignUpFormStyleSheet.VStackStyle} space={3}>
        <Text style={SignUpFormStyleSheet.HeadingText}>Welcome Back!</Text>
        <Text style={SignUpFormStyleSheet.HeadingSubText}>
          Log in to continue
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
            onChangeText={(value) => setData({ ...formData, emailID: value })}
          />
        </FormControl>

        {/* Password */}
        <FormControl>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              color: "black",
            }}
          >
            Password
          </FormControl.Label>
          <Input
            variant="underlined"
            borderBottomColor="#775700"
            name="password"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            onChangeText={(value) => setData({ ...formData, password: value })}
          />
        </FormControl>
        <HStack>
          <Button
            variant="ghost"
            title="SignIn"
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            _text={{
              color: "#775700",
            }}
          >
            Forgot Password?
          </Button>
        </HStack>
        <Text style={SignUpFormStyleSheet.PrivacyPolicyStyle}>
          By continuing, you agree to our Terms of Service and Privacy policy.
        </Text>
        <Button
          style={SignUpFormStyleSheet.CreateAccButton}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Log in
        </Button>
        <Text style={SignUpFormStyleSheet.PrivacyPolicyStyle}>or</Text>
        <Button
          leftIcon={<AntDesign name="google" size={24} color="black" />}
          variant="outline"
          style={SignUpFormStyleSheet.LogInButton}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Log in with google
        </Button>
        <Button
          leftIcon={<FontAwesome5 name="facebook" size={24} color="black" />}
          variant="outline"
          style={SignUpFormStyleSheet.LogInButton}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Log in with facebook
        </Button>
      </VStack>
    </>
  );
}

export default SignInForm;