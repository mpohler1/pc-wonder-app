import React, {Component} from "react";
import {connect} from "react-redux";
import ItemList from "./ItemList";
import {setMainViewMode} from "../../../actions/actions";
import {CHECKOUT} from "../../../resources/viewMode";

class Cart extends Component {

    handleCheckoutButton() {
        this.props.setMainViewMode(CHECKOUT);
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
                            </div>
                            <div className="container-fluid fixed-bottom bg-white border-top border-secondary cart-footer">
                                <div className="d-flex flex-row align-items-center text-nowrap p-2">
                                    <h3 className="d-inline-block mr-2 ml-auto">
                                        Total: ${this.props.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}
                                    </h3>
                                    <button className="btn btn-primary mr-auto ml-2"
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

export default connect(mapStateToProps, {
    setMainViewMode
})(Cart);
