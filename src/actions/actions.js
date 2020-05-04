import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    SET_DRAWER_VISIBILITY,
    SET_MAIN_VIEW_MODE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_DETAIL_PRODUCT,
    SET_NAVBAR_MOBILE
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

export const setNavbarMobile = mobile => (
    {
        type: SET_NAVBAR_MOBILE,
        payload: {
            mobile: mobile
        }
    }
);


export const setDrawerVisibility = drawerVisible => (
    {
        type: SET_DRAWER_VISIBILITY,
        payload: {
            drawerVisible: drawerVisible
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
);
