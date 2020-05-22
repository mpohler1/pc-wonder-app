import React, {Component} from "react";
import {connect} from "react-redux";

class Storage extends Component {

    render() {
        return (
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Year</td>
                        <td>{this.props.product.year}</td>
                    </tr>
                    <tr>
                        <td>Storage Type</td>
                        <td>{this.props.product.type}</td>
                    </tr>
                    <tr>
                        <td>Form Factor</td>
                        <td>{this.props.product.form}</td>
                    </tr>
                    <tr>
                        <td>SATA Versrion</td>
                        <td>{this.props.product.sataVersion}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>{this.props.product.size} GB</td>
                    </tr>
                    <tr>
                        <td>Cache</td>
                        <td>{this.props.product.cache} MB</td>
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

})(Storage);
