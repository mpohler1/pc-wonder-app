import React, {Component} from "react";
import {connect} from "react-redux";
import ItemList from "./ItemList";

class Cart extends Component {

    handleCheckoutButton() {

    }

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
                        <div className="container-fluid">
                            <div className="row row-cols-1">
                                <div className="col col-lg-9 p-0 p-sm-2 p-md-3">
                                    <ItemList/>
                                </div>
                                <div className="col col-lg-3 p-2 p-md-3">
                                    <h3>
                                        Total: ${
                                            this.props.items &&
                                            this.props.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)
                                        }
                                    </h3>
                                    <button className="btn btn-primary"
                                            onClick={() => this.handleCheckoutButton()}>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};

export default connect(mapStateToProps, {})(Cart);
