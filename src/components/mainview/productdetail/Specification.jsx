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
import Case from "./specification/Case";
import Cooling from "./specification/Cooling";
import Keyboard from "./specification/Keyboard";
import Memory from "./specification/Memory";
import Monitor from "./specification/Monitor";
import Motherboard from "./specification/Motherboard";
import Mouse from "./specification/Mouse";
import Storage from "./specification/Storage";
import CentralProcessingUnit from "./specification/CentralProcessingUnit";
import GraphicsProcessingUnit from "./specification/GraphicsProcessingUnit";
import PowerSupplyUnit from "./specification/PowerSupplyUnit";

class Specification extends Component {

    render() {
        switch (this.props.product.category.name) {
            case CASE:
                return <Case/>;

            case COOLING:
                return <Cooling/>;

            case CPU:
                return <CentralProcessingUnit/>;

            case GPU:
                return <GraphicsProcessingUnit/>;

            case KEYBOARD:
                return <Keyboard/>;

            case MEMORY:
                return <Memory/>;

            case MONITOR:
                return <Monitor/>;

            case MOTHERBOARD:
                return <Motherboard/>;

            case MOUSE:
                return <Mouse/>;

            case PSU:
                return <PowerSupplyUnit/>;

            case STORAGE:
                return <Storage/>;

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
