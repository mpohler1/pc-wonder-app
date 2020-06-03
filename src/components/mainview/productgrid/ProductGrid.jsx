import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    insertItemIntoCart,
    setDetailProduct,
} from "../../../actions/actions";
import {PRODUCT_DETAIL} from "../../../resources/routes";
import {Link, withRouter} from "react-router-dom";
import {fetchAllProducts, fetchProductsByCategoryName, fetchProductsBySearch} from "../../../service/apiService";
import * as queryString from "query-string";
import {convertHyphensToSpaces} from "../../../service/urlConverter";
import {toast} from "react-toastify";

class ProductGrid extends Component {

    handleCartButtonClick(product) {
        this.props.insertItemIntoCart(product, 1);
        toast.success("Added " + product.name + " to cart!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    handleProductClick(product) {
        this.props.setDetailProduct(product);
    }

    /*
    * Right now there are 3 API calls for Products. products by category, products by search, and all products. These
    * API calls are mutually exclusive for now, meaning you cannot search within a category. There is some nasty boolean
    * logic that ensures the calls are used in a mutually exclusive way. This all will change when filtering is added.
    **/

    determinePageTitle() {
        if (!this.props.location.search) {
            document.title = "All Products";
        } else {
            const parsedQuery = queryString.parse(convertHyphensToSpaces(this.props.location.search));
            // Needs to change when no longer mutually exclusive
            if (parsedQuery.category) {
                document.title = parsedQuery.category;
            } else if (parsedQuery.search) {
                document.title = parsedQuery.search;
            } else {
                document.title = "Products";
            }
        }
    }

    determineProductList() {
        if (this.props.location.search) {
            const parsedQuery = queryString.parse(convertHyphensToSpaces(this.props.location.search));
            if (parsedQuery.category && parsedQuery.category !== this.props.categoryName) {
                this.getProductsByCategoryName(parsedQuery.category);
            }
            else if (parsedQuery.search && parsedQuery.search !== this.props.searchString) {
                this.getProductsBySearchString(parsedQuery.search);
            }
        // the below condition is true when there has been a previous fetch for products by category or search
        } else if (this.props.categoryName !== "" || this.props.searchString !== "") {
            this.getAllProducts();
        }
    }

    getProductsByCategoryName(categoryName) {
        this.props.fetchProductsRequest();
        fetchProductsByCategoryName(categoryName).then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json, categoryName, "");
            } else {
                this.props.fetchProductsFailure();
            }
        })
    }

    getProductsBySearchString(searchString) {
        this.props.fetchProductsRequest();
        fetchProductsBySearch(searchString).then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json, "", searchString);
            } else {
                this.props.fetchProductsFailure();
            }
        })
    }

    getAllProducts() {
        this.props.fetchProductsRequest();
        fetchAllProducts().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json, "", "");
            } else {
                this.props.fetchProductsFailure();
            }
        });
    }

    componentDidMount() {
        this.determinePageTitle();
        this.determineProductList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.search !== this.props.location.search) {
            this.determinePageTitle();
            this.determineProductList();
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.products.length === 0 &&
                    <div className="container-fluid">
                        <div className="row d-flex flex-row align-items-center page">
                            <div className="col d-flex flex-column align-items-center">
                                <h1 className="display-4">
                                    No products found.
                                </h1>
                                <p>
                                    No products could be found for the search query "{this.props.searchString}".
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props.products.length > 0 &&
                    <div className="container-fluid bg-secondary page">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pl-0 pr-2 pt-2 pb-0">
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
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.list,
        categories: state.categories.list,
        categoryName: state.products.categoryName,
        searchString: state.products.searchString
    };
};

export default withRouter(connect(mapStateToProps, {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    setDetailProduct,
    insertItemIntoCart
})(ProductGrid));
