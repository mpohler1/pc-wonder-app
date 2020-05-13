import React, {Component} from "react";
import Address from "./Address";
import Payment from "./Payment";
import OrderTotal from "./OrderTotal";

class Checkout extends Component {

    render() {
        return (
            <div className="container pb-3">
                <Address/>
                <Payment/>
                <OrderTotal/>
            </div>
        );
    }
}

export default Checkout;
