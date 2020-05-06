import {FETCH_PRODUCTS_SUCCESS, SET_DETAIL_PRODUCT, SET_PRODUCT_QUANTITY} from "../actions/actionTypes";

function productReducer(state = {list: [], quantity: 0}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.productList
            });

        case SET_DETAIL_PRODUCT:
            return Object.assign({}, state, {
                detail: action.payload.product
            });

        case SET_PRODUCT_QUANTITY:
            return Object.assign({}, state, {
                quantity: action.payload.quantity
            });

        default:
            return state;
    }
}

export default productReducer;
