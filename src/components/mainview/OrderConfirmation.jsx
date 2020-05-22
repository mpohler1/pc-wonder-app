import React, {Component} from "react";
import {connect} from "react-redux";

class OrderConfirmation extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h4>
                            Your order has been placed.
                        </h4>
                        <p>
                            Thank you for ordering through PC Wonder.
                            If this was a real website, your order would be shipped to the following address.
                        </p>
                        <h5>
                            {this.props.name}<br/>
                            {this.props.companyName.length > 0 && (
                                <React.Fragment>
                                    {this.props.companyName}<br/>
                                </React.Fragment>
                            )}
                            {this.props.street} {this.props.apartmentNumber}<br/>
                            {this.props.city.name}, {this.props.state.name} {this.props.zip}<br/>
                        </h5>
                        <p>
                            The details of your order may be found below.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.order.map(item => (
                                        <tr>
                                            <td>{item.product.name}</td>
                                            <td>${parseFloat(item.product.price).toFixed(2)}</td>
                                            <td>{item.quantity}</td>
                                            <td>${(parseFloat(item.product.price) * parseFloat(item.quantity)).toFixed(2)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th/>
                                    <th/>
                                    <th>Total:</th>
                                    <th>${this.props.total}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.cart.order,
        total: state.cart.order.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2),
        name: state.address.name,
        companyName: state.address.companyName,
        street: state.address.street,
        apartmentNumber: state.address.apartmentNumber,
        country: state.address.country,
        state: state.address.state,
        city: state.address.city,
        zip: state.address.zip
    };
};

export default connect(mapStateToProps, {})(OrderConfirmation);
