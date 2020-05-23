import React, {Component} from "react";
import {connect} from "react-redux";
import {insertItemIntoCart, setDetailProduct, setRoute} from "../../../actions/actions";
import {PRODUCT_DETAIL} from "../../../resources/routes";
import {Link, withRouter} from "react-router-dom";

class ProductGrid extends Component {

    handleCartButtonClick(product) {
        this.props.insertItemIntoCart(product, 1);
    }

    handleProductClick(product) {
        this.props.setDetailProduct(product);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 bg-secondary pl-0 pr-2 pt-2 pb-0">
                    {
                        this.props.products.map(product => (
                            <div className="col pr-0 pt-0 pl-2 pb-2 d-flex align-items-stretch">
                                <div className="card container-fluid p-0 m-0">
                                    <Link to={PRODUCT_DETAIL + product.uuid} onClick={() => this.handleProductClick(product)}>
                                        <img src={product.imageURL}
                                             className="btn btn-card-img-top card-img-top product-thumbnail container-fluid p-0 m-0"
                                             alt={product.name + " image"}/>
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.name}
                                        </h5>
                                        <p className="card-subtitle">
                                            {product.manufacturer.name}
                                        </p>
                                        <h5 className="card-title">
                                            {product.rating}
                                        </h5>
                                        <h4 className="card-title">
                                            ${product.price.toFixed(2)}
                                        </h4>
                                        <button className="btn btn-primary"
                                                onClick={() => this.handleCartButtonClick(product)}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.list
    };
};

export default withRouter(connect(mapStateToProps, {
    setDetailProduct,
    setRoute,
    insertItemIntoCart
})(ProductGrid));
