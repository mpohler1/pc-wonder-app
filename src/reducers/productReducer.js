import {FETCH_PRODUCTS_SUCCESS} from "../actions/actionTypes";

function productReducer(state = {list: []}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.productList
            });

        default:
            return state;
    }
}

export default productReducer;
