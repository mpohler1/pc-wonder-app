import {PRODUCT_GRID} from "../resources/viewMode";
import {SET_MAIN_VIEW_MODE} from "../actions/actionTypes";

function mainViewReducer(state = {viewMode: PRODUCT_GRID}, action) {
    switch (action.type) {
        case SET_MAIN_VIEW_MODE:
            return Object.assign({}, state, {
                viewMode: action.payload.viewMode
            });

        default:
            return state;
    }
}

export default mainViewReducer;
