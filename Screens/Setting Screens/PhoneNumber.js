import { AntDesign } from '@expo/vector-icons';
import { Box, Button, VStack } from 'native-base';
import React, { useRef, useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import HeadingBox from '../../Components/HeadingBox';
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';


//validation problem to be sorted

function PhoneNumber({ navigation }) {
const [value, setValue] = useState("");
const [formattedValue, setFormattedValue] = useState("");
const [valid, setValid] = useState(false);
const phoneInput = useRef (PhoneInput);

  const onSubmit = async () => {
    const checkValid =await phoneInput.current?.isValidNumber(value);
    console.log(checkValid, value);
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
        <HeadingBox message="Change Phone Number" />
        <Box
          style={{
            alignItems: "center",
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="
            "
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
          />
        </Box>
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
          Change phone number
        </Button>
      </VStack>
    </>
  );
}

export default PhoneNumber 