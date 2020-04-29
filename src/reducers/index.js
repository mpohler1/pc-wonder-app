import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer"
import navbarReducer from "./navbarReducer";
import mainViewReducer from "./mainViewReducer";
import productReducer from "./productReducer";

export default combineReducers({
    categories: categoryReducer,
    products: productReducer,
    navbar: navbarReducer,
    mainView: mainViewReducer
})
