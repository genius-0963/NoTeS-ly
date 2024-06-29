import React, { useState } from 'react'
import { Input } from 'native-base'
import { AntDesign } from "@expo/vector-icons";
import SearchbarStyle from '../StyleSheets/SearchbarStyle';

function Searchbar() {

  const [search, setSearch] = useState('');

  const onSubmit = () => {
    console.log(search)
  }

  return (
    <>
      <Input
        style={SearchbarStyle.SearchBarStyle}
        collapsable
        variant="rounded"
        InputRightElement={
          <AntDesign
          style={SearchbarStyle.IconStyle}
            name="search1"
            size={24}
            color="black"
            onPress={onSubmit}
          />
        }
        onChangeText={(value) => {
          setSearch(value);
        }}
      ></Input>
    </>
  );

}

export default Searchbar