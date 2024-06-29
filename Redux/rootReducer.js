import { combineReducers } from "redux";
import SignupReducer from "./Reducers/SignupReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import UploadNotesReducer from "./Reducers/UploadNotesReducer";
import AllNotesReducer from "./Reducers/AllNotesReducer";

rootReducer = combineReducers({SignupReducer, ProfilePageReducer, UploadNotesReducer, AllNotesReducer})

export default rootReducer