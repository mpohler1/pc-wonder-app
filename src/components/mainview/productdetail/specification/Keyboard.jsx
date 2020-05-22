import React, {Component} from "react";
import {connect} from "react-redux";

class Keyboard extends Component {

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
                        <td>Mechanical</td>
                        <td>{this.props.mechanical ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Backlit</td>
                        <td>{this.props.backlit ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Wired</td>
                        <td>{this.props.wired ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>USB</td>
                        <td>{this.props.usb ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>PS2</td>
                        <td>{this.props.ps2 ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{this.props.product.color}</td>
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

})(Keyboard);
