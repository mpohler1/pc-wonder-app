const apiURL = "https://api.masonpohler.com:3000";

export function fetchCategories() {
    const endpoint = apiURL + "/categories";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}

export function fetchAllProducts() {
    const endpoint = apiURL + "/products";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}

export function fetchProductsByCategoryId(categoryId) {
    const endpoint = apiURL + "/products/category/id/" + categoryId;
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}

export function fetchProductsByCategoryName(categoryName) {
    const endpoint = apiURL + "/products/category/name/" + categoryName;
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}

export function fetchProductsBySearch(searchString) {
    const endpoint = apiURL + "/products/search/" + searchString;
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}

export function fetchProductByUUID(uuid) {
    const endpoint = apiURL + "/product/" + uuid;
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}
