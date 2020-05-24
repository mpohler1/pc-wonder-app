import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_SUCCESS, SET_CATEGORY,
    SET_DETAIL_PRODUCT,
    SET_QUANTITY_IN_PRODUCT_DETAIL
} from "../actions/actionTypes";

function productReducer(state = {list: [], quantity: 0}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.productList,
                categoryName: action.payload.categoryName
            });

        // These two cases do the same thing.
        case FETCH_PRODUCT_SUCCESS:
        case SET_DETAIL_PRODUCT:
            return Object.assign({}, state, {
                detail: action.payload.product,
                quantity: 1
            });

        case SET_QUANTITY_IN_PRODUCT_DETAIL:
            return Object.assign({}, state, {
                quantity: action.payload.quantity
            });

        default:
            return state;
    }
}

export default productReducer;
