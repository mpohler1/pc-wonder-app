import {SET_DRAWER_VISIBILITY, SET_NAVBAR_MOBILE, SET_SCROLL_Y_AND_STICKY_TOP} from "../actions/actionTypes";
import {BOOTSTRAP_XS_BREAKPOINT} from "../resources/breakpoints";

function navbarReducer(
    state = {
        drawerVisible: false,
        mobile: (window.innerWidth <= BOOTSTRAP_XS_BREAKPOINT),
        scrollY: 0,
        stickyTop: true
    },
    action
) {
    switch (action.type) {
        case SET_DRAWER_VISIBILITY:
            return Object.assign({}, state, {
                drawerVisible: action.payload.drawerVisible
            });

        case SET_NAVBAR_MOBILE:
            return Object.assign({}, state, {
                mobile: action.payload.mobile
            });

        case SET_SCROLL_Y_AND_STICKY_TOP:
            return Object.assign({}, state, {
                scrollY: action.payload.scrollY,
                stickyTop: action.payload.stickyTop
            });

        default:
            return state;
    }
}

export default navbarReducer;
