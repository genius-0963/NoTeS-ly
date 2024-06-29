import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import MainNavigator from "./Navigators/MainNavigator";
import theme from "./Themes/theme";
import { Platform } from "react-native";

import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setPositionAsync("absolute");
      NavigationBar.setBackgroundColorAsync("#ffffff00");
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <MainNavigator></MainNavigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}