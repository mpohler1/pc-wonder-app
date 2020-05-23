import React, {Component} from "react";
import ProductGrid from "./productgrid/ProductGrid";
import ProductDetail from "./productdetail/ProductDetail";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import {CART, CHECKOUT, ORDER_CONFIRMATION, PRODUCT_DETAIL, PRODUCT_GRID} from "../../resources/routes";
import {connect} from "react-redux";
import OrderConfirmation from "./orderconfirmation/OrderConfirmation";
import {Route, Switch} from "react-router-dom";

class MainView extends Component {

    render() {
        return (
            <Switch>
                <Route path={PRODUCT_GRID} exact component={ProductGrid}/>
                <Route path={PRODUCT_DETAIL} component={ProductDetail}/>
                <Route path={CART} component={Cart}/>
                <Route path={CHECKOUT} component={Checkout}/>
                <Route path={ORDER_CONFIRMATION} component={OrderConfirmation}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        route: state.mainView.route
    }
};

export default connect(mapStateToProps)(MainView);
