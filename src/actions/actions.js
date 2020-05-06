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
    SET_MOBILE, SET_SCROLL_Y_AND_STICKY_TOP, SET_LARGEST, INSERT_ITEM_INTO_CART, SET_PRODUCT_QUANTITY
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

export const setDrawerVisibility = drawerVisible => (
    {
        type: SET_DRAWER_VISIBILITY,
        payload: {
            drawerVisible: drawerVisible
        }
    }
);

export const setScrollYAndStickyTop = (scrollY, stickyTop) => (
    {
        type: SET_SCROLL_Y_AND_STICKY_TOP,
        payload: {
            scrollY: scrollY,
            stickyTop: stickyTop
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

export const setProductQuantity = quantity => (
    {
        type: SET_PRODUCT_QUANTITY,
        payload: {
            quantity: quantity
        }
    }
);

export const insertItemIntoCart = (product, quantity) => (
    {
        type: INSERT_ITEM_INTO_CART,
        payload: {
            product: product,
            quantity: quantity
        }
    }
);

export const setMobile = mobile => (
    {
        type: SET_MOBILE,
        payload: {
            mobile: mobile
        }
    }
);

export const setLargest = largest => (
    {
        type: SET_LARGEST,
        payload: {
            largest: largest
        }
    }
);
