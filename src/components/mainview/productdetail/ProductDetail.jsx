import React, {Component} from "react";
import {connect} from "react-redux";
import Specification from "./Specification";
import {
    fetchProductFailure,
    fetchProductRequest,
    fetchProductSuccess,
    insertItemIntoCart,
    setQuantityInProductDetail
} from "../../../actions/actions";
import {fetchProductByUUID} from "../../../service/apiService";

class ProductDetail extends Component {

    handleQuantityChange(event) {
        const quantity = parseInt(event.target.value);
        if (quantity > 0 || isNaN(quantity)) {
            this.props.setQuantityInProductDetail(quantity);
        }
    }

    handleCartButtonClick() {
        this.props.insertItemIntoCart(this.props.product, this.props.quantity);
    }

    loadProductFromURL() {
        const uuid = this.props.match.params.uuid;
        if (this.props.product === undefined || this.props.product.uuid !== uuid) {
            this.props.fetchProductRequest();
            fetchProductByUUID(uuid).then(([response, json]) => {
                if (response.status === 200) {
                    this.props.fetchProductSuccess(json);
                } else {
                    this.props.fetchProductFailure();
                }
            })
        }
    }

    componentDidMount() {
        this.loadProductFromURL();
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.props.product &&
                    <div className="container-fluid d-flex flex-row align-items-center page">
                        <div className="container-fluid d-flex flex-column align-items-center">
                            <h1 className="display-4">
                                Product not found.
                            </h1>
                            <p>
                                A product associated with this page could not be found.
                            </p>
                        </div>
                    </div>
                }
                {
                    this.props.product &&
                    <div className="d-flex flex-nowrap flex-row align-items-center mt-3">
                        <div className="col">
                            <div className="row row-cols-1 row-cols-sm-12 mt-sm-2 mt-lg-3">
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
                                            <div className="specification-box">
                                                <Specification/>
                                            </div>
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
                }
            </React.Fragment>
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
    setQuantityInProductDetail,
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure
})(ProductDetail);
