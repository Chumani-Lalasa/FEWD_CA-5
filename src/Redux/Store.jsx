import { legacy_createStore } from "redux";
import formReducer from "./Reducer";
// passing reducer to the store
const store = legacy_createStore(formReducer)
export default store;