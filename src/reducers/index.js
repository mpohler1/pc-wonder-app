import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer"
import navbarReducer from "./navbarReducer";
import mainViewReducer from "./mainViewReducer";

export default combineReducers({
    categories: categoryReducer,
    navbar: navbarReducer,
    mainView: mainViewReducer
})
