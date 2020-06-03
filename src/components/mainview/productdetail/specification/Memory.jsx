import React, {Component} from "react";
import {connect} from "react-redux";

class Memory extends Component {

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
                        <td>{this.props.product.size}</td>
                    </tr>
                    <tr>
                        <td>Capacity</td>
                        <td>
                            {this.props.product.numSticks * this.props.product.memoryPerStick} GB (
                            {this.props.product.numSticks} x {this.props.product.memoryPerStick} GB)
                        </td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{this.props.product.type}</td>
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

})(Memory);
