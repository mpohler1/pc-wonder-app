import {combineReducers} from "redux";
import categoryReducer from "./CategoryReducer"

export default combineReducers({categories: categoryReducer})
