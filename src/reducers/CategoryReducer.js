import {SET_CATEGORY_LIST} from "../actions/actionTypes";

function categoryReducer(state = {categoryList: []}, action) {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return Object.assign({}, state, (
                {
                    list: action.payload.categoryList
                }
            ));

        default:
            return state;
    }
}

export default categoryReducer;
