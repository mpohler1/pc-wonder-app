import React, {Component} from "react";
import ProductGrid from "./productgrid/ProductGrid";
import ProductDetail from "./productdetail/ProductDetail";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import {CART, CHECKOUT, ORDER_CONFIRMATION, PRODUCT_DETAIL, PRODUCT_GRID} from "../../resources/viewMode";
import {connect} from "react-redux";
import OrderConfirmation from "./orderconfirmation/OrderConfirmation";

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
