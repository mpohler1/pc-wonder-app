import React, {Component} from "react";
import {connect} from "react-redux";
import {PRODUCT_GRID} from "../../resources/viewMode";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    setMainViewMode,
    setNavbarMenuVisibility
} from "../../actions/actions";
import {fetchProductsByCategory} from "../../service/apiService";

class Menu extends Component {

    handleMenuIconClick() {
        this.props.setNavbarMenuVisibility(!this.props.menuVisible);
    }

    handleMenuItemClick(id) {
        this.props.fetchProductsRequest();
        fetchProductsByCategory(id).then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json);
            } else {
                this.props.fetchProductsFailure();
            }
        });
        this.props.setMainViewMode(PRODUCT_GRID);
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
                <button className="navbar-toggler"
                        id="navbarDropdownMenuButton"
                        type="button"
                        onClick={() => this.handleMenuIconClick()}
                        onBlur={event => this.handleOnBlur(event)}>
                    <span className="navbar-toggler-icon"/>
                </button>
                {
                    this.props.menuVisible &&
                    (
                        <div className="dropdown-menu show"
                             aria-labelledby="navbarDropdownMenuButton">
                            {this.props.categories.map(category => (
                                <React.Fragment>
                                    <button className="btn nav-item nav-link"
                                            onClick={() => this.handleMenuItemClick(category.id)}>
                                        {category.name}
                                    </button>
                                    {
                                        category.id !== this.props.categories[this.props.categories.length - 1].id &&
                                        <div className="dropdown-divider"/>
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        menuVisible: state.navbar.menuVisible
    }
};

export default connect(mapStateToProps, {
    setNavbarMenuVisibility,
    setMainViewMode,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure
})(Menu);
