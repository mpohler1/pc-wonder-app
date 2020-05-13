import React, {Component} from "react";
import {connect} from "react-redux";

class Checkout extends Component {

    render() {
        return (
            <div className="container pb-3">
                <div className="row">
                    <div className="col">
                        <div className="form-row my-2">
                            <div className="col">
                                <label htmlFor="firstName">First Name</label>
                                <input className="form-control" id="firstName" placeholder="First Name"/>
                            </div>
                            <div className="col">
                                <label htmlFor="lastName">Last Name</label>
                                <input className="form-control" id="lastName" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col">
                                <label htmlFor="companyName">Company Name</label>
                                <input className="form-control" id="companyName" placeholder="Company Name"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col-8">
                                <label htmlFor="streetAddress">Street Address</label>
                                <input className="form-control" id="streetAddress" placeholder="Street Address"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="apartmentNumber">Apartment #</label>
                                <input className="form-control" id="apartmentNumber" placeholder="Apartment #"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col-6">
                                <label htmlFor="city">City</label>
                                <input className="form-control" id="city" placeholder="City"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="state">State</label>
                                <input className="form-control" id="state" placeholder="ST"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="zipAddress">Zip</label>
                                <input className="form-control" id="zip" placeholder="Zip"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col-6">
                                <label htmlFor="email">Email Address</label>
                                <input className="form-control" id="email" placeholder="email@address.com"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone">Phone Number</label>
                                <input className="form-control" id="phone" placeholder="123-456-7890"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-row my-2">
                            <div className="col">
                                <label htmlFor="cardNumber">Card Number <span className="text-danger">*</span> </label>
                                <input className="form-control" id="cardNumber" disabled="true"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col-4">
                                <label htmlFor="expiration">Expiration <span className="text-danger">*</span> </label>
                                <input className="form-control" id="expiration" disabled="true"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="cvc">CVC/CVV <span className="text-danger">*</span> </label>
                                <input className="form-control" id="cvc" disabled="true"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="zipPayment">Zip <span className="text-danger">*</span> </label>
                                <input className="form-control" id="zipPayment" disabled="true"/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="col">
                                <p className="text-danger">*Since this is a demo, payment has been disabled for your security.</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <button className="btn btn-primary">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        total: state.cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)
    };
};

export default connect(mapStateToProps, {})(Checkout);
