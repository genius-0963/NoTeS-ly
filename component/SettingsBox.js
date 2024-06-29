import React from "react";
import { Box, HStack, Button, Text } from "native-base";
import SettingBoxStyle from "../StyleSheets/SettingBoxStyle";
import ProductBoxStyle from "../StyleSheets/ProductBoxStyle";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import matchLabel from "../Data/dataMatchLabelRedirect";


const SettingsBox = ({label, icon}) => {

  const navigation = useNavigation()
    return (
      <>
        <Box
          style={[
            {
              width: "100%",
            },
            SettingBoxStyle.boxBackground,
          ]}
        >
          <HStack width={"100%"}>
            <Box
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
            <Box
              style={{
                width: "60%",
              }}
            >
              <Text style={ProductBoxStyle.TextStyle}>{label}</Text>
            </Box>

            <Button style={SettingBoxStyle.buttonBox}
            onPress={() => navigation.navigate(matchLabel.get(label))}
            >
              <AntDesign name="rightcircleo" size={24} color="black" />
            </Button>
          </HStack>
        </Box>
      </>
    );
}

export default SettingsBox
