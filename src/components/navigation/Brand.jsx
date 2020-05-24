import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    setDrawerVisibility
} from "../../actions/actions";
import {PRODUCT_GRID} from "../../resources/routes";
import {withRouter} from "react-router-dom";

class Brand extends Component {

    handleOnClick() {
        this.props.setDrawerVisibility(false);
        this.props.history.push(PRODUCT_GRID);
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

export default withRouter(connect(mapStateToProps, {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    setDrawerVisibility
})(Brand));
