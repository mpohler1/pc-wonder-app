import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    setRoute,
    setDrawerVisibility
} from "../../actions/actions";
import {fetchAllProducts} from "../../service/apiService";
import {PRODUCT_GRID} from "../../resources/routes";

class Brand extends Component {

    handleOnClick() {
        this.props.fetchProductsRequest();
        fetchAllProducts().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json);
            } else {
                this.props.fetchProductsFailure();
            }
            this.props.setMainViewMode(PRODUCT_GRID);
            this.props.setNavbarMenuVisibility(false);
        });
    }

    render() {
        return (
            <h3 className="btn brand text-white text-nowrap ml-3 p-0"
                onClick={() => this.handleOnClick()}>
                PC Wonder
            </h3>
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
    setMainViewMode: setRoute,
    setNavbarMenuVisibility: setDrawerVisibility
})(Brand);
