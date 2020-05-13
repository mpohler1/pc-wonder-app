import {
    SET_ADDRESS_APARTMENT_NUMBER, SET_ADDRESS_CITY,
    SET_ADDRESS_COMPANY_NAME, SET_ADDRESS_EMAIL,
    SET_ADDRESS_FIRST_NAME,
    SET_ADDRESS_LAST_NAME, SET_ADDRESS_PHONE_NUMBER, SET_ADDRESS_STATE,
    SET_ADDRESS_STREET, SET_ADDRESS_ZIP
} from "../actions/actionTypes";

function addressReducer(state={
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartmentNumber: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phoneNumber: ""
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

        case SET_ADDRESS_CITY:
            return Object.assign({}, state, {
                city: action.payload.city
            });

        case SET_ADDRESS_STATE:
            return Object.assign({}, state, {
                state: action.payload.state
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

        default:
            return state;
    }
}

export default addressReducer;
