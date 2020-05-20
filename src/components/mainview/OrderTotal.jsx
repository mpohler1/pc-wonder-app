import React, {Component} from "react";
import {connect} from "react-redux";
import {setMainViewMode} from "../../actions/actions";
import {ORDER_CONFIRMATION} from "../../resources/viewMode";
import {CONSTRAINTS} from "../../resources/constraints";
import validate from "validate.js";
import csc from "country-state-city";

class OrderTotal extends Component {

    handlePlaceOrderButtonClick() {
        let validatorResults = validate({
            name: this.props.name,
            street: this.props.street,
            apartmentNumber: this.props.apartmentNumber,
            zip: this.props.zip,
            email: this.props.email
        }, CONSTRAINTS);

        let cscResults = {};

        if (csc.getCountryById(this.props.country.id) !== this.props.country) {
            cscResults.country = ["Select a Country"];
        }

        if (csc.getStateById(this.props.state.id) !== this.props.state) {
            cscResults.state = ["Select a State"];
        }

        else if (!csc.getStatesOfCountry(this.props.country.id).includes(this.props.state)) {
            cscResults.state = ["State must be within selected Country."];
        }

        if (csc.getCityById(this.props.city.id) !== this.props.city) {
            cscResults.city = ["Select a City"];
        }

        else if (!csc.getCitiesOfState(this.props.state.id).includes(this.props.city)) {
            cscResults.city = ["City must be within selected State"];
        }

        let combinedResults = Object.assign({}, validatorResults, cscResults);

        if (combinedResults === undefined) {
            this.props.setMainViewMode(ORDER_CONFIRMATION);
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
                        </div>
                    </div>
                </div>
            </div>
        );
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
        city: state.address.city
    };
};

export default connect(mapStateToProps, {
    setMainViewMode
})(OrderTotal);
