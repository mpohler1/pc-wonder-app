import React, {Component} from "react";
import {connect} from "react-redux";

class CoolingDetail extends Component {

    render() {
        return (
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Year</td>
                        <td>{this.props.product.year}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>{this.props.product.size} mm</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>{this.props.product.length} x {this.props.product.width} x {this.props.product.height} mm</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{this.props.product.weight} lbs</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.detail
    };
};

export default connect(mapStateToProps, {

})(CoolingDetail);
