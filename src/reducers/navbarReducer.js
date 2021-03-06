import {SET_DRAWER_VISIBILITY, SET_SCROLL_Y_AND_STICKY_TOP, SET_SEARCH_BAR_TEXT} from "../actions/actionTypes";

function navbarReducer(
    state = {
        drawerVisible: false,
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

        case SET_SEARCH_BAR_TEXT:
            return Object.assign({}, state, {
                searchBarText: action.payload.searchBarText
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
