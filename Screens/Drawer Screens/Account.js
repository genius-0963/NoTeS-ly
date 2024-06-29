import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SectionList, View, VStack, Text, Button } from 'native-base';
import React from 'react'
import HeadingBox from '../../Components/HeadingBox';
import Searchbar from '../../Components/Searchbar';
import SettingsBox from '../../Components/SettingsBox';
import HomePageStyle from '../../StyleSheets/HomePageStyle';
import SearchbarStyle from '../../StyleSheets/SearchbarStyle';
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';

function Account({ navigation }) {
  const accountInfo = [
    {
      name: "Favorites",
      logo: <MaterialIcons name="favorite-border" size={24} color="black" />,
    },
    {
      name: "Uploads",
      logo: <MaterialIcons name="upload-file" size={24} color="black" />,
    },
    {
      name: "Downloads",
      logo: <Ionicons name="ios-download-outline" size={24} color="black" />,
    },
    {
      name: "Saved",
      logo: <Feather name="save" size={24} color="black" />,
    },
  ];
  const data = [
    {
      title: "",
      data: accountInfo,
    },
  ];
  return (
    <>
      <Button
        variant="ghost"
        leftIcon={<AntDesign name="leftcircleo" size={24} color="black" />}
        style={SignUpFormStyleSheet.GoBackButton}
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <VStack
        style={[SignUpFormStyleSheet.SignUpVStack, { flex: 1 }]}
        space={10}
      >
        <HeadingBox message="My Account" />
        <Searchbar style={SearchbarStyle.SearchBarStyle}></Searchbar>
        <SectionList
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
          sections={data}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={() => (
            <>
              <View
                style={{
                  height: 2,
                }}
              ></View>
            </>
          )}
          renderItem={({ item }) => (
            <SettingsBox label={item.name} icon={item.logo} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={HomePageStyle.SubHeading}>{title}</Text>
          )}
        />
      </VStack>
    </>
  );
}

export default Account