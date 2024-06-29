import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import  thunkMiddleware  from "redux-thunk";

// const composedEnhancer = composeWithDevTools();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store

