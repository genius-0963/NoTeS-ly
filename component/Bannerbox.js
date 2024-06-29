import React from "react";
import { Box, Heading, Image, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import HomePageStyle from "../StyleSheets/HomePageStyle";

const BannerBox = () => {

    const {height, width} = useWindowDimensions()


    return (
      <>
        <Box
          style={[{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            padding: 10,
          }, HomePageStyle.BannerBox]}
        >
          <Box
            style={{
              width: "35%",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../Images/Banner_Notes1.png")}
              alt=""
              size="xl"
              style={{
                alignSelf: "center",
                resizeMode: "cover",
                aspectRatio: 1.2,
              }}
            />
          </Box>
          <Box
            style={{
              width: "65%",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                SignUpFormStyleSheet.HeadingText,
                {
                  fontSize: 25,
                },
              ]}
            >
              ALL NOTES
            </Text>
            <Text
              allowFontScaling
              style={[
                SignUpFormStyleSheet.HeadingText,
                {
                  fontSize: 23,
                  color: "#af4221",
                },
              ]}
            >
              Get all you want here
            </Text>
            <Text
              style={[
                SignUpFormStyleSheet.HeadingText,
                {
                  fontSize: 15,
                  lineHeight: 30,
                  color: "#595543",
                },
              ]}
            >
              Go to desired category and find your desired notes
            </Text>
          </Box>
        </Box>
      </>
    );
}

export default BannerBox