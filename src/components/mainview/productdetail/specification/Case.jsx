import React, {Component} from "react";
import {connect} from "react-redux";

class Case extends Component {

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
                        <td>Max PSU Length</td>
                        <td>{this.props.product.maxPSULength} mm</td>
                    </tr>
                    <tr>
                        <td>Number of Large HDD Bays</td>
                        <td>{this.props.product.largeHDDBays}</td>
                    </tr>
                    <tr>
                        <td>Number of Small HDD Bays</td>
                        <td>{this.props.product.smallHDDBays}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{this.props.product.color}</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>{this.props.product.length} x {this.props.product.width} x {this.props.product.height} in</td>
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

})(Case);
