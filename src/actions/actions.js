import {SET_CATEGORY_LIST} from "./actionTypes";

export const setCategoryList = categoryList => (
    {
        type: SET_CATEGORY_LIST,
        payload: {
            categoryList: categoryList
        }
    }
);
