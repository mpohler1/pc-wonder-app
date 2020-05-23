import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    setDrawerVisibility
} from "../../actions/actions";
import {fetchAllProducts} from "../../service/apiService";
import {PRODUCT_GRID} from "../../resources/routes";
import {Link} from "react-router-dom";

class Brand extends Component {

    handleOnClick() {
        this.props.fetchProductsRequest();
        fetchAllProducts().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json);
            } else {
                this.props.fetchProductsFailure();
            }
            this.props.setDrawerVisibility(false);
        });
    }

    render() {
        return (
            <Link to={PRODUCT_GRID}
                  onClick={() => this.handleOnClick()}>
                <h3 className="btn brand text-white text-nowrap ml-3 p-0">
                    PC Wonder
                </h3>
            </Link>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    setDrawerVisibility
})(Brand);
