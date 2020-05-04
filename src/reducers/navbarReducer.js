import {SET_DRAWER_VISIBILITY, SET_NAVBAR_MOBILE} from "../actions/actionTypes";
import {BOOTSTRAP_XS_BREAKPOINT} from "../resources/breakpoints";

function navbarReducer(state = {drawerVisible: false, mobile: (window.innerWidth <= BOOTSTRAP_XS_BREAKPOINT)}, action) {
    switch (action.type) {
        case SET_DRAWER_VISIBILITY:
            return Object.assign({}, state, {
                drawerVisible: action.payload.drawerVisible
            });

        case SET_NAVBAR_MOBILE:
            return Object.assign({}, state, {
                mobile: action.payload.mobile
            });

        default:
            return state;
    }
}

export default navbarReducer;
