import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Button, FormControl, Icon, Input, VStack } from 'native-base';
import React, { useState } from 'react'
import { Pressable } from 'react-native';
import HeadingBox from '../../Components/HeadingBox';
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';

function PasswordReset({ navigation }) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(password);
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
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message=" Edit Password" />
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
            onChangeText={(value) => setPassword(value)}
          />
        </FormControl>
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
    </>
  );
}

export default PasswordReset