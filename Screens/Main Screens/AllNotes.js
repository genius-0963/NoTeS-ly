import React, { useEffect } from "react";
import { Text, VStack } from "native-base";
import ListItem from "../../Components/ListItem";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import Searchbar from "../../Components/Searchbar";
import HeadingBox from "../../Components/HeadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listAllNotes } from "../../Redux/Actions/AllNotesAction";

//Issues
//1. Search file function


function AllNotes() {

  //called only once using useEffect
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listAllNotes()); 
  }, [])

  const data = useSelector((state) => state);

  return (
    <>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="All Notes" />
        <Searchbar />
        <ListItem data={data.AllNotesReducer} />
      </VStack>
    </>
  );
}

export default AllNotes;