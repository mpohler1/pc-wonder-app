import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    SET_NAVBAR_MENU_VISIBILITY,
    SET_MAIN_VIEW_MODE
} from "./actionTypes";

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

export const setNavbarMenuVisibility = menuVisible => (
    {
        type: SET_NAVBAR_MENU_VISIBILITY,
        payload: {
            menuVisible: menuVisible
        }
    }
);

export const setMainViewMode = viewMode => (
    {
        type: SET_MAIN_VIEW_MODE,
        payload: {
            viewMode: viewMode
        }
    }
);
