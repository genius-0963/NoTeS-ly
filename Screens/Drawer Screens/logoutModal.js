import { Button, Text, View } from 'native-base';
import React from 'react'
import { useDispatch } from 'react-redux';
import { signOutAcc } from '../../Redux/Actions/SignUpLoginAction';

function LogoutModal({navigation}) {
    const dispatch = useDispatch(state => state.SignupReducer)
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => dispatch(signOutAcc())}/>
      </View>

    </>
  );
}

export default LogoutModal