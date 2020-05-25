import React, {Component} from "react";
import MenuButton from "./MenuButton";
import {connect} from "react-redux";
import {
    setDrawerVisibility
} from "../../actions/actions";
import Brand from "./Brand";
import {withRouter} from "react-router-dom";
import {PRODUCT_GRID} from "../../resources/routes";

class Drawer extends Component {

    handleBackgroundClick() {
        this.props.setDrawerVisibility(false);
    }

    handleDrawerListClick(categoryName) {
        this.props.setDrawerVisibility(false);
        this.props.history.push(PRODUCT_GRID + "/?category=" + categoryName);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.drawerVisible &&
                    <div className="drawer-shadow fixed-top"
                         onClick={() => this.handleBackgroundClick()}/>
                }
                {
                    this.props.drawerVisible &&
                    <div className="hide drawer navbar navbar-dark bg-dark d-flex flex-column flex-nowrap align-items-start border-right border-secondary px-0 m-0 fixed-top">
                        <div className="d-flex flex-row flex-nowrap align-items-center border-bottom border-secondary px-3 pb-2">
                            <MenuButton/>
                            <Brand/>
                        </div>
                        <div className="drawer-list d-flex flex-column flex-nowrap align-items-start mt-2 mb-auto">
                            {this.props.categories.map(category => (
                                <div className="nav-item">
                                    <button className="h5 btn btn-lg nav-link text-white-50 text-nowrap p-0 pl-3"
                                            onClick={() => this.handleDrawerListClick(category.name.toLowerCase())}>
                                        {category.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        drawerVisible: state.navbar.drawerVisible
    };
};

export default withRouter(connect(mapStateToProps, {
    setDrawerVisibility,
})(Drawer));
