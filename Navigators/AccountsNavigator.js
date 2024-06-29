import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../Screens/Drawer Screens/Account'
import Favorites from '../Screens/Account Screens/Favorites'
import UserUploads from "../Screens/Account Screens/UserUploads";
import UserDownloads from "../Screens/Account Screens/UserDownloads";
import SavedFiles from '../Screens/Account Screens/SavedFiles';


function AccountsNavigator() {


  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="My Uploads" component={UserUploads} />
      <Stack.Screen name="My Downloads" component={UserDownloads} />
      <Stack.Screen name="Saved Files" component={SavedFiles} />
    </Stack.Navigator>
  );
}

export default AccountsNavigator