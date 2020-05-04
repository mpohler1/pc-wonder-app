import {SET_DRAWER_VISIBILITY} from "../actions/actionTypes";

function navbarReducer(state = {drawerVisible: false}, action) {
    switch (action.type) {
        case SET_DRAWER_VISIBILITY:
            return Object.assign({}, state, {
                drawerVisible: action.payload.drawerVisible
            });

        default:
            return state;
    }
}

export default navbarReducer;
