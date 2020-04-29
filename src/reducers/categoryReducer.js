import {FETCH_CATEGORIES_SUCCESS} from "../actions/actionTypes";

function categoryReducer(state = {categoryList: []}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
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
