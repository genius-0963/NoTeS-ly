import React from "react";
import ProductBox from "./ProductBox";
import { View } from "native-base";

const CarouselCardItem = ({item, index}) => {
    return (
      <>
      <View key={index}>
        <ProductBox textImage={{label:item.title, image:item.icon}}/>
      </View>
      </>
    );
}

export default CarouselCardItem;