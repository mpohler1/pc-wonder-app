import React, {Component} from "react";
import {connect} from "react-redux";

class Cart extends Component {

    render() {
        console.log(this.props.cart);
        return (
            <React.Fragment>
                {
                    this.props.cart.length === 0 &&
                        <div className="container-fluid d-flex flex-row align-items-center page">
                            <div className="container-fluid d-flex flex-column align-items-center">
                                <h1 className="display-4">
                                    Your cart is empty.
                                </h1>
                            </div>
                        </div>
                }
                {
                    this.props.cart.length > 0 &&
                    <div className="container-fluid">
                        {
                            this.props.cart.map(item => (
                                <div className="row row-cols-1 border-bottom border-secondary p-2 d-flex flex-row align-items-center">
                                    <div className="col col-sm-3 col-xl-2 p-0">
                                        <img className="card-img p-0"
                                             src={item.product.imageURL}
                                             alt={"Thumbnail for " + item.product.name}/>
                                    </div>
                                    <div className="col col-sm-2 p-2">
                                        <h5 className="p-0">
                                            {item.product.name}
                                        </h5>
                                    </div>
                                    <div className="col col-sm-7 p-2">
                                        <div className="input-group d-flex flex-row align-items-center">
                                            <p className="pl-sm-2 pr-2 ml-sm-auto">
                                                ${item.product.price} x
                                            </p>
                                            <input className="form-control quantity"
                                                   type="number"
                                                   placeholder="1"/>
                                            <p className="px-2">
                                                = ${item.product.price * item.quantity}
                                            </p>
                                            <button className="btn btn-danger ml-auto">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.items
    };
};

export default connect(mapStateToProps, {})(Cart);
