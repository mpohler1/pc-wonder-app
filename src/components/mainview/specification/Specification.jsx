import React, {Component} from "react";
import {connect} from "react-redux";
import {
    CASE,
    COOLING,
    CPU,
    GPU,
    KEYBOARD,
    MEMORY,
    MONITOR,
    MOTHERBOARD,
    MOUSE,
    PSU, STORAGE
} from "../../../resources/categories";
import CaseDetails from "./CaseDetail";
import CoolingDetails from "./CoolingDetail";
import KeyboardDetails from "./KeyboardDetail";
import MemoryDetail from "./MemoryDetail";
import MonitorDetail from "./MonitorDetail";
import MotherboardDetail from "./MotherboardDetail";
import MouseDetail from "./MouseDetail";
import StorageDetail from "./StorageDetail";
import CPUDetails from "./CPUDetail";
import GPUDetails from "./GPUDetail";
import PSUDetail from "./PSUDetail";

class Specification extends Component {

    render() {
        switch (this.props.product.category.name) {
            case CASE:
                return <CaseDetails/>;

            case COOLING:
                return <CoolingDetails/>;

            case CPU:
                return <CPUDetails/>;

            case GPU:
                return <GPUDetails/>;

            case KEYBOARD:
                return <KeyboardDetails/>;

            case MEMORY:
                return <MemoryDetail/>;

            case MONITOR:
                return <MonitorDetail/>;

            case MOTHERBOARD:
                return <MotherboardDetail/>;

            case MOUSE:
                return <MouseDetail/>;

            case PSU:
                return <PSUDetail/>;

            case STORAGE:
                return <StorageDetail/>;

            default:
                return <div/>;
        }
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.detail
    };
};
export default connect(mapStateToProps, {

})(Specification);
