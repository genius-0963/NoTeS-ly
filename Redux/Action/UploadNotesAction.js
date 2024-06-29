import { ref, uploadBytesResumable, getStorage } from "firebase/storage";
import { listAllNotes } from "./AllNotesAction";

const storage = getStorage();



export const uploadNotes = (data) => {
  return async (dispatch) => {
    if (!data.blobFile) return;
    const sotrageRef = ref(storage, `${data.fileName}`);
    const uploadTask = uploadBytesResumable(sotrageRef, data.blobFile);
    dispatch({ type: "UPLOAD_NOTE", payload: "" });
    dispatch(listAllNotes())
  };
};