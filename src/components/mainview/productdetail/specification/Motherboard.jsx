import React, {Component} from "react";
import {connect} from "react-redux";

class Motherboard extends Component {

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
                        <td>Size</td>
                        <td>{this.props.product.size}</td>
                    </tr>
                    <tr>
                        <td>Max Memory</td>
                        <td>{this.props.product.maxMemory} GB</td>
                    </tr>
                    <tr>
                        <td>Memory Slots</td>
                        <td>{this.props.product.memorySlots}</td>
                    </tr>
                    <tr>
                        <td>PCI Express 1.0 Slots</td>
                        <td>{this.props.product.pciExpress1Slots}</td>
                    </tr>
                    <tr>
                        <td>PCI Express 2.0 Slots</td>
                        <td>{this.props.product.pciExpress2Slots}</td>
                    </tr>
                    <tr>
                        <td>PCI Express 3.0 Slots</td>
                        <td>{this.props.product.pciExpress3Slots}</td>
                    </tr>
                    <tr>
                        <td>PCI Express 4.0 Slots</td>
                        <td>{this.props.product.pciExpress4Slots}</td>
                    </tr>
                    <tr>
                        <td>USB 2.0 Ports</td>
                        <td>{this.props.product.usb2Ports}</td>
                    </tr>
                    <tr>
                        <td>USB 3.0 Ports</td>
                        <td>{this.props.product.usb3Ports}</td>
                    </tr>
                    <tr>
                        <td>USB C Ports</td>
                        <td>{this.props.product.usbCPorts}</td>
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
                        <td>VGA Ports</td>
                        <td>{this.props.product.vgaPorts}</td>
                    </tr>
                    <tr>
                        <td>PS/2 Ports</td>
                        <td>{this.props.product.ps2Ports}</td>
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

})(Motherboard);
