import React, {Component} from "react";
import {connect} from "react-redux";

class CPUDetail extends Component {

    render() {
        return (
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Year</td>
                        <td>{this.props.product.year}</td>
                    </tr>
                    <tr>
                        <td>Socket</td>
                        <td>{this.props.product.socket}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{this.props.product.speed} GHz</td>
                    </tr>
                    <tr>
                        <td>Cores</td>
                        <td>{this.props.product.cores}</td>
                    </tr>
                    <tr>
                        <td>64-bit Support</td>
                        <td>{this.props.product.sixtyFourBitSupport ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Hyper Threading Support</td>
                        <td>{this.props.product.hyperThreadingSupport ? 'Yes' : 'No'}</td>
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

})(CPUDetail);
