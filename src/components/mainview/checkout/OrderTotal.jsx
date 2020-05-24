import React, {Component} from "react";
import {connect} from "react-redux";
import {placeOrder, setValidationErrors} from "../../../actions/actions";
import {ORDER_CONFIRMATION} from "../../../resources/routes";
import {CONSTRAINTS} from "../../../resources/constraints";
import validate from "validate.js";
import csc from "country-state-city";

class OrderTotal extends Component {

    handlePlaceOrderButtonClick() {
        const errors = this.validateAddress();
        // check if errors are empty
        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            this.props.placeOrder();

        }
        this.props.setValidationErrors(errors);
    }

    displayPlaceOrderButtonFeedback() {
        // check if there are errors
        if (Object.keys(this.props.errors).length > 0) {
            return " There were errors processing your information.";
        } else {
            return "";
        }
    }

    render() {

        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h3>
                                Order: ${this.props.total}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>
                                Shipping: $0.00
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>
                                Total: ${(parseFloat(this.props.total) + 0.00).toFixed(2)}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary" onClick={() => this.handlePlaceOrderButtonClick()}>
                                Place Order
                            </button>
                            <span className="text-danger">
                                {this.displayPlaceOrderButtonFeedback()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    validateAddress() {
        const textFieldErrors = this.validateTextFields();
        const dropdownErrors = this.validateDropDowns();
        const combinedErrors = Object.assign({}, textFieldErrors, dropdownErrors);
        return combinedErrors;
    }

    validateTextFields() {
        let errors = {};

        /* validate() returns undefined when there are no issues, but since I combine these errors with the dropdown
        errors, it can never be undefined. If the dropdown validation changes or is removed, there is the possibility
        that this function returns undefined if the below conditionals are false. To future proof this method, I decided
        to use Object.assign() to ensure that I only return either an empty object or an object with errors. */
        errors = Object.assign({}, errors, validate({
            name: this.props.name,
            street: this.props.street,
        }, CONSTRAINTS));

        if (this.props.apartmentNumber.length > 0) {
            const apartmentNumberResults = validate({apartmentNumber: this.props.apartmentNumber}, CONSTRAINTS);
            errors = Object.assign({}, errors, apartmentNumberResults);
        }

        if (this.props.zip.length > 0) {
            const zipResults = validate({zip: this.props.zip}, CONSTRAINTS);
            errors = Object.assign({}, errors, zipResults);
        }

        if (this.props.email.length > 0) {
            const emailResults = validate({email: this.props.email}, CONSTRAINTS);
            errors = Object.assign({}, errors, emailResults);
        }

        return errors;
    }

    validateDropDowns() {
        let errors = {};

        if (csc.getCountryById(this.props.country.id) !== this.props.country) {
            errors.country = ["Select a Country"];
        }

        if (csc.getStateById(this.props.state.id) !== this.props.state) {
            errors.state = ["Select a State"];
        }

        else if (!csc.getStatesOfCountry(this.props.country.id).includes(this.props.state)) {
            errors.state = ["State must be within selected Country"];
        }

        if (csc.getCityById(this.props.city.id) !== this.props.city) {
            errors.city = ["Select a City"];
        }

        else if (!csc.getCitiesOfState(this.props.state.id).includes(this.props.city)) {
            errors.city = ["City must be within selected State"];
        }

        return errors;
    }
}

const mapStateToProps = state => {
    return {
        total: state.cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2),
        name: state.address.name,
        street: state.address.street,
        apartmentNumber: state.address.apartmentNumber,
        zip: state.address.zip,
        email: state.address.email,
        country: state.address.country,
        state: state.address.state,
        city: state.address.city,
        errors: state.address.errors
    };
};

export default connect(mapStateToProps, {
    setValidationErrors,
    placeOrder
})(OrderTotal);
