import {FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS} from "./actionTypes";

export const fetchCategoriesRequest = () => (
    {
        type: FETCH_CATEGORIES_REQUEST
    }
);

export const fetchCategoriesSuccess = categoryList => (
    {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
            categoryList: categoryList
        }
    }
);

export const fetchCategoriesFailure = () => (
    {
        type: FETCH_CATEGORIES_FAILURE
    }
);
