import {SET_LARGEST, SET_MOBILE} from "../actions/actionTypes";
import {SM_BREAKPOINT, XXL_BREAKPOINT} from "../resources/breakpoints";

function screenReducer(state={
    mobile: (window.innerWidth < SM_BREAKPOINT),
    largest: (window.innerWidth >= XXL_BREAKPOINT)
}, action) {
    switch (action.type) {
        case SET_MOBILE:
            return Object.assign({}, state, {
                mobile: action.payload.mobile
            });

        case SET_LARGEST:
            return Object.assign({}, state, {
                largest: action.payload.largest
            });

        default:
            return state;
    }
}

export default screenReducer;
