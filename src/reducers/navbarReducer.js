import {SET_NAVBAR_MENU_VISIBILITY} from "../actions/actionTypes";

function navbarReducer(state = {menuVisible: false}, action) {
    switch (action.type) {
        case SET_NAVBAR_MENU_VISIBILITY:
            return Object.assign({}, state, {
                menuVisible: action.payload.menuVisible
            });

        default:
            return state;
    }
}

export default navbarReducer;
