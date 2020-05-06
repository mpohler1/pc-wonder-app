import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer"
import navbarReducer from "./navbarReducer";
import mainViewReducer from "./mainViewReducer";
import productReducer from "./productReducer";
import screenReducer from "./screenReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    categories: categoryReducer,
    products: productReducer,
    navbar: navbarReducer,
    mainView: mainViewReducer,
    cart: cartReducer,
    screen: screenReducer
})
