import React, {Component} from "react";
import {connect} from "react-redux";

class Cart extends Component {

    render() {
        console.log(this.props.cart);
        return (
            <div>
                <h1 className="display-1">
                    Cart
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.items
    };
};

export default connect(mapStateToProps, {})(Cart);
