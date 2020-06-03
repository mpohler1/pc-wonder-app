import React, {Component} from "react";
import Address from "./Address";
import Payment from "./Payment";
import OrderTotal from "./OrderTotal";
import {connect} from "react-redux";

class Checkout extends Component {

    componentDidMount() {
        document.title = "Checkout";
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex flex-row align-items-center page">
                    <div className="col d-flex flex-column align-items-center">
                    {
                        this.props.items.length === 0 &&
                        <h1 className="display-4">
                            Your cart is empty.
                        </h1>
                    }
                    {
                        this.props.items.length > 0 &&
                        <div className="container my-3">
                            <Address/>
                            <Payment/>
                            <OrderTotal/>
                        </div>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
};

export default connect(mapStateToProps, {})(Checkout);
