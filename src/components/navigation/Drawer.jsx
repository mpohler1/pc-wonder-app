import React, {Component} from "react";
import {fetchProductsByCategory} from "../../service/apiService";
import {PRODUCT_GRID} from "../../resources/viewMode";
import MenuButton from "./MenuButton";
import {connect} from "react-redux";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess, setMainViewMode,
    setNavbarMenuVisibility
} from "../../actions/actions";

class Drawer extends Component {

    handleOnClick(id) {
        this.props.fetchProductsRequest();
        fetchProductsByCategory(id).then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json);
            } else {
                this.props.fetchProductsFailure();
            }
        });
        this.props.setMainViewMode(PRODUCT_GRID);
        this.props.setNavbarMenuVisibility(false);
    }

    handleOnBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setNavbarMenuVisibility(false);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.menuVisible &&
                    <div className="hide drawer navbar navbar-dark bg-dark d-flex flex-column flex-nowrap align-items-start border-right border-secondary px-0 m-0"
                        onBlur={event => this.handleOnBlur(event)}>
                        <div className="d-flex flex-row flex-nowrap align-items-start border-bottom border-secondary px-3 pt-2 pb-3">
                            <MenuButton/>
                            <h3 className="text-white text-nowrap ml-3">
                                PC Wonder
                            </h3>
                        </div>
                        <div className="drawer-list d-flex flex-column flex-nowrap align-items-start mt-2 mb-auto">
                            {this.props.categories.map(category => (
                                <div className="nav-item">
                                    <button className="h5 btn btn-lg nav-link text-white-50 text-nowrap p-0 pl-3"
                                            onClick={() => this.handleOnClick(category.id)}>
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
        menuVisible: state.navbar.menuVisible
    };
};

export default connect(mapStateToProps, {
    setNavbarMenuVisibility,
    setMainViewMode,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure
})(Drawer);
