import React from "react";
import { ImageBackground } from "react-native";
    import {
    Text,
    Center,
    Button,
    Box,
    } from "native-base";
    import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

    const HomeScreen = ({}) => {

    const navigat = useNavigation();

    return (
        <Center flex={1} px="0">
        <ImageBackground
            source={require("../../Images/notes_front.jpg")}
            style={styles.backgroundImage}
            alt="Alternate Text"
        >
            <Box>
            <Text fontSize="6xl">Note it Up</Text>
            </Box>
            <Box style={styles.alignBottomBox}>
            <Box alignItems="center">
                <Button
                style={styles.buttonStyle}
                title="Go to Signin"
                colorScheme="amber"
                variant="subtle"
                size="lg"
                onPress={() => navigat.navigate("LoginNavigator")}
                >
                Log in
                </Button>
            </Box>
            <Box alignItems="center">
                <Button
                style={styles.buttonStyle}
                title="Go to Signin"
                size="lg"
                onPress={() => navigat.navigate("LoginNavigator",{screen:"Signup"})}
                >
                Sign Up
                </Button>
            </Box>
            </Box>
        </ImageBackground>
        </Center>
    );
};

let styles = StyleSheet.create({
    backgroundImage: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        height: "100%",
    },
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonStyle: {
        margin: 10,
        borderRadius: 50,
        width: 300,
    },
    alignBottomBox: {
        top: "30%",
    },
});
export default HomeScreen;