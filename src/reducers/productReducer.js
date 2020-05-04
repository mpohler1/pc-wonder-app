import {FETCH_PRODUCTS_SUCCESS, SET_DETAIL_PRODUCT} from "../actions/actionTypes";

function productReducer(state = {list: []}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.productList
            });

        case SET_DETAIL_PRODUCT:
            return Object.assign({}, state, {
                detail: action.payload.product
            });

        default:
            return state;
    }
}

export default productReducer;
