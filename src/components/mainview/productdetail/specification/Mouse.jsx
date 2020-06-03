import React, {Component} from "react";
import {connect} from "react-redux";

class Mouse extends Component {

    render() {
        return (
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Year</td>
                        <td>{this.props.product.year}</td>
                    </tr>
                    <tr>
                        <td>Orientation</td>
                        <td>{this.props.product.orientation}</td>
                    </tr>
                    <tr>
                        <td>Tracking Method</td>
                        <td>{this.props.product.tracking}</td>
                    </tr>
                    <tr>
                        <td>Wired</td>
                        <td>{this.props.product.wired ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Interface</td>
                        <td>{this.props.product.mouseInterface}</td>
                    </tr>
                    <tr>
                        <td>Buttons</td>
                        <td>{this.props.product.buttons}</td>
                    </tr>
                    <tr>
                        <td>Max DPI</td>
                        <td>{this.props.product.maxDPI}</td>
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

})(Mouse);
