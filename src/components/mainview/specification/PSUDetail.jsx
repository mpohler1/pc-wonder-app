import React, {Component} from "react";
import {connect} from "react-redux";

class PSUDetail extends Component {

    render() {
        return (
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Year</td>
                        <td>{this.props.product.year}</td>
                    </tr>
                    <tr>
                        <td>Max Power</td>
                        <td>{this.props.product.maxPower} W</td>
                    </tr>
                    <tr>
                        <td>Energy Efficiency Rating</td>
                        <td>{this.props.product.efficiency}</td>
                    </tr>
                    <tr>
                        <td>Mean Time Between Failure</td>
                        <td>{this.props.product.lifespan} hr</td>
                    </tr>
                    <tr>
                        <td>ATX Connectors</td>
                        <td>{this.props.product.atxConnectors}</td>
                    </tr>
                    <tr>
                        <td>EPS Connectors</td>
                        <td>{this.props.product.epsConnectors}</td>
                    </tr>
                    <tr>
                        <td>PCI Connector</td>
                        <td>{this.props.product.pciConnectors}</td>
                    </tr>
                    <tr>
                        <td>SATA Connector</td>
                        <td>{this.props.product.sataConnectors}</td>
                    </tr>
                    <tr>
                        <td>Peripheral Connectors</td>
                        <td>{this.props.product.peripheralConnectors}</td>
                    </tr>
                    <tr>
                        <td>Floppy Connectors</td>
                        <td>{this.props.product.floppyConnectors}</td>
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

})(PSUDetail);
