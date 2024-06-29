import { StyleSheet } from "react-native";

export default StyleSheet.create({
    VStackStyle : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeadingText: {
        fontSize: 30,
        fontWeight: '600'
    },
    HeadingSubText: {
        fontSize: 20,
        color: '#95999b'
    },
    PasswordSubTextStyle: {
        fontSize: 12
    },
    PrivacyPolicyStyle: {
        fontSize: 12
    },
    FormText: {
        color: 'black'
    },
    SignUpVStack: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 70
    },
    SignUpHStack: {
        justifyContent: 'center',
    },
    SignUpHStackText: {
        fontSize: 15
    },
    CreateAccButton: {
        borderRadius: 50,
        backgroundColor: '#ffc529',
        width: '60%'
    },
    MainHeadingText: {
        color: "black",
        fontSize: 40
    },
    LogInButton: {
        borderRadius: 50,
        width: '60%'
    },
    GoBackButton: {
        marginTop: 5,
        marginLeft: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    }
});