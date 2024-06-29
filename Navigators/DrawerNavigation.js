import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Drawer Screens/Profile';
import Help from "../Screens/Drawer Screens/Profile";
import Connections from "../Screens/Drawer Screens/Profile";
import BottomTabNavigator from './BottomTabNavigator';
import SettingsNavigator from './SettingsNavigator';
import AccountsNavigator from './AccountsNavigator';
import LogoutModal from '../Screens/Drawer Screens/LogoutModal';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#EFF5FC",
        },
      }}
      useLegacyImplementation={false}
    >
      <Drawer.Screen name="Bottom" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Account" component={AccountsNavigator} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Connections" component={Connections} />
      <Drawer.Screen name='Log out' component={LogoutModal} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation