import React, {Component} from "react";
import {connect} from "react-redux";

class ProductGrid extends Component {

    render() {
        return (
            <div className="container-fluid">

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.list
    };
};

export default connect(mapStateToProps, {})(ProductGrid);
