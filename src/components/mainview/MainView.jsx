import React, {Component} from "react";
import ProductGrid from "./ProductGrid";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import {CART, CHECKOUT, ORDER_CONFIRMATION, PRODUCT_DETAIL, PRODUCT_GRID} from "../../resources/viewMode";
import {connect} from "react-redux";
import OrderConfirmation from "./OrderConfirmation";

class MainView extends Component {

    render() {
        switch(this.props.viewMode) {
            case PRODUCT_GRID:
                return (
                    <ProductGrid/>
                );

            case PRODUCT_DETAIL:
                return (
                    <ProductDetail/>
                );

            case CART:
                return (
                    <Cart/>
                );

            case CHECKOUT:
                return (
                    <Checkout/>
                );

            case ORDER_CONFIRMATION:
                return (
                    <OrderConfirmation/>
                );

            default:
                return <div/>
        }
    }
}

const mapStateToProps = state => {
    return {
        viewMode: state.mainView.viewMode
    }
};

export default connect(mapStateToProps)(MainView);
