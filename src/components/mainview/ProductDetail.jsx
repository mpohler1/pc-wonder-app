import React, {Component} from "react";
import {connect} from "react-redux";
import Specification from "./specification/Specification";
import {insertItemIntoCart, setProductQuantity} from "../../actions/actions";

class ProductDetail extends Component {

    handleQuantityChange(event) {
        this.props.setProductQuantity(parseInt(event.target.value));
    }

    handleCartButtonClick() {
        this.props.insertItemIntoCart(this.props.product, this.props.quantity);
    }

    componentDidMount() {
        this.props.setProductQuantity(1);
    }

    render() {
        return (
            <div className="d-flex flex-nowrap flex-row align-items-center m-2">
                <div className="col">
                    <div className="row row-cols-1 row-cols-sm-12 mx-auto mt-sm-2 mt-lg-3">
                        <div className="col col-md-6 col-lg-8 mb-2">
                            <img src={this.props.product.imageURL}
                                 className="card card-img product-full p-0"
                                 alt={"" + this.props.product.name + " Image"}/>
                        </div>
                        <div className="col col-md-6 col-lg-4">
                            <h2>
                                {this.props.product.name}
                            </h2>
                            <h5>
                                {this.props.product.manufacturer.name}
                            </h5>
                            <p>
                                {this.props.product.description} <br/>
                            </p>
                            <div className="d-flex flex-row align-items-center mb-2">
                                <h2 className="text-nowrap">
                                    ${this.props.product.price.toFixed(2)}
                                </h2>
                                <div className="input-group">
                                    <input className="form-control quantity ml-2"
                                           type="number"
                                           value={this.props.quantity}
                                           onChange={event => this.handleQuantityChange(event)}/>
                                    <button className="btn btn-primary ml-2"
                                            onClick={() => this.handleCartButtonClick()}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            {
                                this.props.largest &&
                                <React.Fragment>
                                    <h5>
                                        Specifications:
                                    </h5>
                                    <Specification/>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                    {
                        !this.props.largest &&
                        <div className="row">
                            <div className="col">
                                <h5>
                                    Specifications:
                                </h5>
                                <Specification/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.detail,
        quantity: state.products.quantity,
        largest: state.screen.largest
    };
};

export default connect(mapStateToProps, {
    insertItemIntoCart,
    setProductQuantity
})(ProductDetail);
