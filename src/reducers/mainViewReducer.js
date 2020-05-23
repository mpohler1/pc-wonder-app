import {PRODUCT_GRID} from "../resources/routes";
import {SET_ROUTE} from "../actions/actionTypes";

function mainViewReducer(state = {route: PRODUCT_GRID}, action) {
    switch (action.type) {
        case SET_ROUTE:
            return Object.assign({}, state, {
                
            });

        default:
            return state;
    }
}

export default mainViewReducer;
