import React, {Component} from "react";
import {connect} from "react-redux";
import ItemList from "./ItemList";
import {CHECKOUT} from "../../../resources/routes";
import {withRouter} from "react-router-dom";

const ORDER_TOTAL_BAR_CLASS_LIST_WITH_UNDER_NAV = "row sticky-top position-sticky under-nav bg-white";
const ORDER_TOTAL_BAR_CLASS_LIST_WITHOUT_UNDER_NAV = "row sticky-top position-sticky bg-white";

class Cart extends Component {

    handleCheckoutButton() {
        this.props.history.push(CHECKOUT);
    }

    componentDidMount() {
        document.title = "Cart";
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.items.length === 0 &&
                    <div className="container-fluid">
                        <div className="row d-flex flex-row align-items-center page">
                            <div className="col d-flex flex-column align-items-center">
                                <h1 className="display-4">
                                    Your cart is empty.
                                </h1>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props.items.length > 0 &&
                        <div className="container-fluid page">
                            <div className={this.props.navbarIsSticky ? ORDER_TOTAL_BAR_CLASS_LIST_WITH_UNDER_NAV : ORDER_TOTAL_BAR_CLASS_LIST_WITHOUT_UNDER_NAV}>
                                <div className="container-fluid">
                                    <div className="row border-top border-secondary border-bottom d-flex flex-row align-items-center cart-total">
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
                            <div className="row row-cols-1">
                                <ItemList/>
                            </div>
                        </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        navbarIsSticky: state.navbar.stickyTop
    };
};

export default withRouter(connect(mapStateToProps, {

})(Cart));
