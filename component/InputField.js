import React from "react";
import {
  FormControl,
  Input,
} from "native-base";

import { addFirstName, addLastName, addInstitute, addBranch } from "../Redux/Actions/ProfilePageActions";
import { useDispatch } from "react-redux";


function InputField({label}) {
    const dispatch = useDispatch()

  return (
    <>
      <FormControl>
        <FormControl.Label
          _text={{
            fontSize: "lg",
            color: "black",
          }}
        >
          {label}
        </FormControl.Label>

        <Input
          borderBottomColor="#775700"
          variant="underlined"
          name="emailID"
          
          onChangeText={(value) => {
            switch(label){
              case "First name": 
                dispatch(addFirstName(value))
                break;
              case "Last name":
                dispatch(addLastName(value))
                break;
              case "Institute":
                dispatch(addInstitute(value));
                break;
              case "Branch":
                dispatch(addBranch(value))
                break;
              default:
            }
          }}
        />
      </FormControl>
    </>
  );
}

export default InputField;