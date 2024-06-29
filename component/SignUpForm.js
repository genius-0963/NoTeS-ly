import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, VStack, Text, Icon, Pressable } from 'native-base'
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet'
import { MaterialIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { authenticationSignup } from '../Redux/Actions/SignUpLoginAction';


function SignUpForm() {

  const [formData, setData] = useState({
    name: '',
    emailID: '',
    password: '',
  })
  const [show, setShow] = useState(false);

// const auth = getAuth(app);


  const dispatch = useDispatch()

  const onSubmit = async () => {
    dispatch(authenticationSignup(formData))
  }
  
  return (
    <>
      <VStack style={SignUpFormStyleSheet.VStackStyle} space={3}>
        <Text style={SignUpFormStyleSheet.HeadingText}>Create account</Text>
        <Text style={SignUpFormStyleSheet.HeadingSubText}>
          SignUp to get all latest notes
        </Text>
        {/* Name (Any combination of letters/numbers/special characters allowed)*/}
        <FormControl>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              color: "black",
            }}
          >
            Name
          </FormControl.Label>
          <Input
            borderBottomColor="#775700"
            variant="underlined"
            name="Name"
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
        </FormControl>

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
          <FormControl.HelperText>
            Password atleast 8 characters long
          </FormControl.HelperText>
          <FormControl.HelperText>
            A combination of uppercase, lowercase, numbers and special
            characters
          </FormControl.HelperText>
        </FormControl>
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
          Create account
        </Button>
      </VStack>
    </>
  );
}

export default SignUpForm