import {
    SET_ADDRESS_APARTMENT_NUMBER, SET_ADDRESS_CITY,
    SET_ADDRESS_COMPANY_NAME, SET_ADDRESS_COUNTRY, SET_ADDRESS_EMAIL,
    SET_ADDRESS_FIRST_NAME,
    SET_ADDRESS_LAST_NAME, SET_ADDRESS_PHONE_NUMBER, SET_ADDRESS_STATE,
    SET_ADDRESS_STREET, SET_ADDRESS_ZIP, SET_COUNTRY_DROPDOWN_VISIBILITY
} from "../actions/actionTypes";

function addressReducer(state={
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartmentNumber: "",
    country: {name: "Select A Country"},
    state: "",
    city: "",
    zip: "",
    email: "",
    phoneNumber: "",
    countryDropdownVisible: false
}, action) {
    switch(action.type) {
        case SET_ADDRESS_FIRST_NAME:
            return Object.assign({}, state, {
                firstName: action.payload.firstName
            });

        case SET_ADDRESS_LAST_NAME:
            return Object.assign({}, state, {
                lastName: action.payload.lastName
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

        case SET_ADDRESS_PHONE_NUMBER:
            return Object.assign({}, state, {
                phoneNumber: action.payload.phoneNumber
            });

        case SET_COUNTRY_DROPDOWN_VISIBILITY:
            return Object.assign({}, state, {
                countryDropdownVisible: action.payload.countryDropdownVisible
            });

        default:
            return state;
    }
}

export default addressReducer;
