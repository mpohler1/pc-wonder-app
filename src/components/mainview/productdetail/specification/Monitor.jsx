import React, {Component} from "react";
import {connect} from "react-redux";

class Monitor extends Component {

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
                        <td>Resolution</td>
                        <td>{this.props.product.resolutionX} x {this.props.product.resolutionY}</td>
                    </tr>
                    <tr>
                        <td>Refresh Rate</td>
                        <td>{this.props.product.refreshRate} Hz</td>
                    </tr>
                    <tr>
                        <td>Response Time</td>
                        <td>{this.props.product.responseTime} ms</td>
                    </tr>
                    <tr>
                        <td>Built In Speakers</td>
                        <td>{this.props.product.speakers ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Curved</td>
                        <td>{this.props.product.curved ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Display Port</td>
                        <td>{this.props.product.displayPort ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>HDMI</td>
                        <td>{this.props.product.hdmi ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>USB Ports</td>
                        <td>{this.props.product.usbPorts}</td>
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

})(Monitor);
