import React from "react";
import {
  Button,
  HStack,
  Text,
  Box,
  VStack,
  Image,
  ScrollView,
  FlatList,
} from "native-base";
import Searchbar from "../../Components/Searchbar";
import ProductBox from "../../Components/ProductBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import HomePageStyle from "../../StyleSheets/HomePageStyle";
import SearchbarStyle from "../../StyleSheets/SearchbarStyle";
import HeadingBox from "../../Components/HeadingBox";
import BannerBox from "../../Components/BannerBox";
import { Carousel } from "react-native-snap-carousel";
import dataFamous from "../../Data/dataFamous";
import CarouselCardItem from "../../Components/CarouselMain";
import { useWindowDimensions } from "react-native";

function HomePage() {

    const SLIDER_WIDTH = useWindowDimensions().width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
    const ITEM_HEIGHT = Math.round(SLIDER_WIDTH * 0.9);
    const isCarousel = React.useRef(null);

  const date = new Date().getHours();
  const timeMsg = date < 12 ? "Good Morning" : date < 18 ? "Good Afternoon" : "Good Evening";
  return (
    <>
      <ScrollView>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message={timeMsg} />
          <Searchbar style={SearchbarStyle.SearchBarStyle}></Searchbar>
          <BannerBox />
          <Text style={HomePageStyle.SubHeading}>Your favorites</Text>
          <ProductBox
            textImage={{
              label: "Mathematics",
              image: require("../../Images/Mathematics.png"),
            }}
          />
          <Text style={HomePageStyle.SubHeading}>Most famous</Text>
        </VStack>

          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={dataFamous}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
          />
      </ScrollView>
    </>
  );
}

export default HomePage;