import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    SET_NAVBAR_MENU_VISIBILITY,
    SET_MAIN_VIEW_MODE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SET_DETAIL_PRODUCT
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

export const fetchProductsRequest = () => (
    {
        type: FETCH_PRODUCTS_REQUEST
    }
);

export const fetchProductsSuccess = productList => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
            productList: productList
        }
    }
);

export const fetchProductsFailure = () => (
    {
        type: FETCH_PRODUCTS_FAILURE
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

export const setDetailProduct = product => (
    {
        type: SET_DETAIL_PRODUCT,
        payload: {
            product: product
        }
    }
)
