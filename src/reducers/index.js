import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer"
import navbarReducer from "./navbarReducer";
import productReducer from "./productReducer";
import screenReducer from "./screenReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";

export default combineReducers({
    categories: categoryReducer,
    products: productReducer,
    navbar: navbarReducer,
    cart: cartReducer,
    address: addressReducer,
    screen: screenReducer
})
