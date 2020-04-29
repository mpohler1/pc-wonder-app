import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer"
import navbarReducer from "./navbarReducer";

export default combineReducers({categories: categoryReducer, navbar: navbarReducer})
