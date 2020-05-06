import {INSERT_ITEM_INTO_CART} from "../actions/actionTypes";

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

        default:
            return state;
    }
}

export default cartReducer;
