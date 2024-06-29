import React, { useState } from 'react'
import { Button, ScrollView, Text, VStack, Box} from 'native-base'
import * as DocumentPicker from 'expo-document-picker'
import ListItem from '../../Components/ListItem'
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet'
import { AntDesign } from "@expo/vector-icons";
import Searchbar from "../../Components/Searchbar";
import HeadingBox from "../../Components/HeadingBox";
import { useDispatch } from 'react-redux'
import { uploadNotes } from '../../Redux/Actions/UploadNotesAction'
  import { getStorage, ref, getDownloadURL } from "firebase/storage";


function UploadNote() {

  const dispatch = useDispatch()

    const [myData, setMyData] = useState([])
    const pickdocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      if (result != null && result.type !== 'cancel') {
        setMyData([...myData, result]);
        const r = await fetch(result.uri);
        const b = await r.blob();
        dispatch(uploadNotes({
          fileName: result.name,
          blobFile: b
        }));
      }
    };

    return (
      <>
        <VStack
          style={[
            SignUpFormStyleSheet.SignUpVStack,
            {
              flex: 1,
            },
          ]}
          space={5}
        >
          <HeadingBox message="Upload Notes" />
          <Searchbar />
          <ListItem data={myData} />
          <Button
            onPress={pickdocument}
            style={{
              borderRadius: 50,
              backgroundColor: "#ffc529",
              elevation: 10,
              position: "absolute",
              height: 50,
              width: 50,
              alignSelf: "center",
              bottom: 15,
            }}
          >
            <AntDesign name="plus" size={24} color="black" />
          </Button>
        </VStack>
      </>
    );
  };

export default UploadNote