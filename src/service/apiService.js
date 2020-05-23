const apiURL = "http://192.168.1.69:8080";

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

export function fetchProductsByCategory(categoryId) {
    const endpoint = apiURL + "/products/category/" + categoryId;
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
