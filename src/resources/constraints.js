export const CONSTRAINTS = {
    name: {
        format: {
            pattern: /^[\w .]+$/,
            message: "must contain at least 1 alphanumeric character"
        }
    },
    street: {
        format: {
            pattern: /^[\w .]+$/,
            message: "must contain at least 1 alphanumeric character"
        }
    },
    apartmentNumber: {
        format: {
            pattern: /^[^\W_]*$/,
            message: "may only contain numbers and letters"
        }
    },
    zip: {
        format: {
            pattern: /^\d{5}-\d{4}|\d{5}$/,
            message: "format must follow 12345 or 12345-6789"
        }
    },
    email: {
        format: {
            // Pattern was found on https://emailregex.com
            // eslint-disable-next-line
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "must be a valid email address"
        }
    }
};
