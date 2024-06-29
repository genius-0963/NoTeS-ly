import { getStorage, ref, listAll } from "firebase/storage";

const storage = getStorage();

let payload = []

//Add loader
//Add file on back navigation

export const listAllNotes = () => {
  return async (dispatch) => {
    const listRef = ref(storage, "");
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
            payload = [...payload, {name: itemRef._location.path_}];
        });
        dispatch({ type: "LIST_ALL_NOTES", payload: payload });
        payload = [] //Added for file reload without addition
      })
      .catch((error) => {
        console.log(error);
      });
  };
};