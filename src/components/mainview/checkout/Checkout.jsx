import React, {Component} from "react";
import Address from "./Address";
import Payment from "./Payment";
import OrderTotal from "./OrderTotal";
import {connect} from "react-redux";

class Checkout extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.items.length === 0 &&
                    <div className="container-fluid d-flex flex-row align-items-center page">
                        <div className="container-fluid d-flex flex-column align-items-center">
                            <h1 className="display-4">
                                Your cart is empty.
                            </h1>
                        </div>
                    </div>
                }
                {
                    this.props.items.length > 0 &&
                    <div className="container pb-3">
                        <Address/>
                        <Payment/>
                        <OrderTotal/>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
};

export default connect(mapStateToProps, {})(Checkout);
