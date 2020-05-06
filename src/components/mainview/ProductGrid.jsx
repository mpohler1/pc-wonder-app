import React, {Component} from "react";
import {connect} from "react-redux";
import {insertItemIntoCart, setDetailProduct, setMainViewMode} from "../../actions/actions";
import {PRODUCT_DETAIL} from "../../resources/viewMode";

class ProductGrid extends Component {

    handleProductClick(product) {
        this.props.setDetailProduct(product);
        this.props.setMainViewMode(PRODUCT_DETAIL);
    }

    handleCartButtonClick(product) {
        this.props.insertItemIntoCart(product, 1);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 bg-secondary p-1">
                    {
                        this.props.products.map(product => (
                            <div className="col p-1 d-flex align-items-stretch">
                                <div className="card container-fluid p-0 m-0">
                                    <img src={product.imageURL}
                                         className="btn btn-card-img-top card-img-top product-thumbnail container-fluid p-0 m-0"
                                         alt={product.name + " image"}
                                         onClick={() => this.handleProductClick(product)}
                                    />
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

export default connect(mapStateToProps, {
    setDetailProduct,
    setMainViewMode,
    insertItemIntoCart
})(ProductGrid);
