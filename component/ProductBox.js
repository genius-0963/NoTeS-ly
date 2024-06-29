import { Box, HStack, VStack, Text, Image, } from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import ProductBoxStyle from '../StyleSheets/ProductBoxStyle';
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import _renderItem from './data';
//Add animation in like
//edit custom component

function ProductBox({textImage}) { 
    const [liked, setLiked] = useState(false);

  return (
    <>
      <Box rounded="lg" style={ProductBoxStyle.HeadBoxStyle}>
        <HStack>
          <Box style={ProductBoxStyle.ImageBox}>
            <Image borderRadius="lg" source={textImage.image} alt="" size="xl"></Image>
          </Box>
          <Box style={ProductBoxStyle.TextBox}>
            <VStack>
              <Text style={ProductBoxStyle.TextStyle}>{textImage.label}</Text>
            </VStack>
          </Box>
          <Pressable onPress={() => setLiked(!liked)}>
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={24}
              color={liked ? "red" : "black"}
            />
          </Pressable>
        </HStack>
      </Box>
    </>
  );
}

export default ProductBox