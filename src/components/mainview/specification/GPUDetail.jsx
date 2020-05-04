import React, {Component} from "react";
import {connect} from "react-redux";

class GPUDetail extends Component {

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
                        <td>Fans</td>
                        <td>{this.props.product.fans}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{this.props.product.speed} MHz</td>
                    </tr>
                    <tr>
                        <td>PCI Interface</td>
                        <td>{this.props.product.pciInterface}</td>
                    </tr>
                    <tr>
                        <td>Display Ports</td>
                        <td>{this.props.product.displayPortPorts}</td>
                    </tr>
                    <tr>
                        <td>HDMI Ports</td>
                        <td>{this.props.product.hdmiPorts}</td>
                    </tr>
                    <tr>
                        <td>DVI Ports</td>
                        <td>{this.props.product.dviPorts}</td>
                    </tr>
                    <tr>
                        <td>Slot Width</td>
                        <td>{this.props.product.slotWidth}</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>{this.props.product.length} x {this.props.product.height} in</td>
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

})(GPUDetail);
