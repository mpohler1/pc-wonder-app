export function fetchCategories() {
    const endpoint = "http://localhost:8080/categories";
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
