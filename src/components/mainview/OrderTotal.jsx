import React, {Component} from "react";
import {connect} from "react-redux";

class OrderTotal extends Component {

    render() {

        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h3>
                                Order: ${this.props.total}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>
                                Shipping: $0.00
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>
                                Total: ${(parseFloat(this.props.total) + 0.00).toFixed(2)}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        total: state.cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)
    };
};

export default connect(mapStateToProps, {})(OrderTotal);
