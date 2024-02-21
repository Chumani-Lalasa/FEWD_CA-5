import { legacy_createStore } from "redux";
import formReducer from "./Reducer";
const store = legacy_createStore(formReducer)
export default store;