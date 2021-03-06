import {
    SET_ADDRESS_APARTMENT_NUMBER,
    SET_ADDRESS_CITY,
    SET_ADDRESS_COMPANY_NAME,
    SET_ADDRESS_COUNTRY,
    SET_ADDRESS_EMAIL,
    SET_ADDRESS_NAME,
    SET_ADDRESS_STATE,
    SET_ADDRESS_STREET,
    SET_ADDRESS_ZIP,
    SET_CITY_DROPDOWN_VISIBILITY,
    SET_COUNTRY_DROPDOWN_VISIBILITY,
    SET_STATE_DROPDOWN_VISIBILITY, SET_VALIDATION_ERRORS
} from "../actions/actionTypes";

function addressReducer(state={
    name: "",
    companyName: "",
    street: "",
    apartmentNumber: "",
    country: {name: "Select A Country"},
    state: {name: "Select A State"},
    city: {name: "Select A City"},
    zip: "",
    email: "",
    phoneNumber: "",
    countryDropdownVisible: false,
    stateDropdownVisible: false,
    cityDropdownVisible: false,
    errors: {}
}, action) {
    switch(action.type) {
        case SET_ADDRESS_NAME:
            return Object.assign({}, state, {
                name: action.payload.name
            });

        case SET_ADDRESS_COMPANY_NAME:
            return Object.assign({}, state, {
                companyName: action.payload.companyName
            });

        case SET_ADDRESS_STREET:
            return Object.assign({}, state, {
                street: action.payload.street
            });

        case SET_ADDRESS_APARTMENT_NUMBER:
            return Object.assign({}, state, {
                apartmentNumber: action.payload.apartmentNumber
            });

        case SET_ADDRESS_COUNTRY:
            return Object.assign({}, state, {
                country: action.payload.country
            });

        case SET_ADDRESS_STATE:
            return Object.assign({}, state, {
                state: action.payload.state
            });

        case SET_ADDRESS_CITY:
            return Object.assign({}, state, {
                city: action.payload.city
            });

        case SET_ADDRESS_ZIP:
            return Object.assign({}, state, {
                zip: action.payload.zip
            });

        case SET_ADDRESS_EMAIL:
            return Object.assign({}, state, {
                email: action.payload.email
            });

        case SET_COUNTRY_DROPDOWN_VISIBILITY:
            return Object.assign({}, state, {
                countryDropdownVisible: action.payload.countryDropdownVisible
            });

        case SET_STATE_DROPDOWN_VISIBILITY:
            return Object.assign({}, state, {
                stateDropdownVisible: action.payload.stateDropdownVisible
            });

        case SET_CITY_DROPDOWN_VISIBILITY:
            return Object.assign({}, state, {
                cityDropdownVisible: action.payload.cityDropdownVisible
            });

        case SET_VALIDATION_ERRORS:
            return Object.assign({}, state, {
                errors: action.payload.validationErrors
            });

        default:
            return state;
    }
}

export default addressReducer;
