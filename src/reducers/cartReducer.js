import {
    INSERT_ITEM_INTO_CART,
    PLACE_ORDER,
    REMOVE_ITEM_FROM_CART,
    SET_QUANTITY_IN_ITEM_LIST
} from "../actions/actionTypes";

function cartReducer(state={items: []}, action) {

    switch (action.type) {
        case INSERT_ITEM_INTO_CART:
            let foundItem = false;
            let items = state.items.slice().map(item => {
                if (item.product.id === action.payload.product.id) {
                    item.quantity += action.payload.quantity;
                    foundItem = true;
                }
                return item;
            });
            if (!foundItem) {
                items.push({
                    product: action.payload.product,
                    quantity: action.payload.quantity
                });
            }
            return Object.assign({}, state, {
                items: items
            });

        case SET_QUANTITY_IN_ITEM_LIST:
            return Object.assign({}, state, {
                items: state.items.slice().map(item => {
                    if (item.product.id === action.payload.productId) {
                        item.quantity = action.payload.quantity;
                    }
                    return item;
                })
            });

        case REMOVE_ITEM_FROM_CART:
            return Object.assign({}, state, {
                items: state.items.slice().filter(item => item.product.id !== action.payload.productId)
            });

        case PLACE_ORDER:
            return Object.assign({}, state, {
                order: state.items,
                items: []
            });

        default:
            return state;
    }
}

export default cartReducer;
