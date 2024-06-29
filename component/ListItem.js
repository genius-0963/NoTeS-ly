import React, { useState } from 'react'
import { FlatList } from 'react-native';
import {  Box, Text, HStack, Image, View, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet';
import ListItemStyle from '../StyleSheets/ListItemStyle';
import SVGImg from '../Images/undraw_add_notes_re_ln36.svg'
import DataUpload from '../Data/dataUpload';

//Add in list if name not null
//Search file

function ListItem({data}) {


  return (
    <>
      <View>
        <FlatList
          data={data}
          ListEmptyComponent={() => (
            <>
              <Box
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SVGImg width="90%" />
              </Box>
            </>
          )}
          renderItem={({ item }) => (
            <>
              <Box style={ListItemStyle.boxSuper}>
                <HStack style={SignUpFormStyleSheet.SignUpHStack}>
                  <Box style={ListItemStyle.boxLeft}>
                    <AntDesign name="filetext1" size={50} color="black" />
                  </Box>
                  <Box style={ListItemStyle.boxRight}>
                    <Text style={SignUpFormStyleSheet.SignUpHStackText}>
                      {item.name}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        ></FlatList>
      </View>
    </>
  );
}

export default ListItem