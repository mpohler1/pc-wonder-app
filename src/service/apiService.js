export function fetchCategories() {
    const endpoint = "http://192.168.1.69:8080/categories";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]))
}

export function fetchAllProducts() {
    const endpoint = "http://192.168.1.69:8080/products";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]))
}
