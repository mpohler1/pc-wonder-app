import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CART} from "../../resources/routes";

class CartButton extends Component {

    render() {
        return (
            <Link to={CART}>
                <button className="btn ml-auto mr-0"
                        type="button">
                    <span className="h3 oi oi-cart text-white"/>
                </button>
            </Link>
        );
    }
}

export default CartButton;
