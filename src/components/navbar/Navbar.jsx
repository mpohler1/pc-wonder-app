import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchCategoriesRequest,
    fetchCategoriesFailure,
    fetchCategoriesSuccess,
    setNavbarMenuVisibility, setMainViewMode
} from "../../actions/actions";
import {fetchCategories} from "../../service/apiService";
import {CART, PRODUCT_GRID} from "../../resources/viewMode";

class Navbar extends Component {

    handleMenuIconClick() {
        this.props.setNavbarMenuVisibility(!this.props.menuVisible);
    }

    handleMenuItemClick(id) {
        this.props.setMainViewMode(PRODUCT_GRID);
    }

    handleSearch() {
        this.props.setMainViewMode(PRODUCT_GRID);
    }

    handleCartClick() {
        this.props.setMainViewMode(CART);
    }

    handleOnBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setNavbarMenuVisibility(false);
    }

    setCategories() {
        this.props.fetchCategoriesRequest();
        fetchCategories().then(([response, json]) => {
            if (response.status === 200) {
                console.log(json);
                this.props.fetchCategoriesSuccess(json)
            } else {
                this.props.fetchCategoriesFailure();
            }
        });
    }

    componentDidMount() {
        this.setCategories();
    }

    render() {
        return (
            <nav className="container-fluid navbar navbar-dark sticky-top bg-dark flex-nowrap">
                {/** Navbar Menu Button **/}
                <button className="navbar-toggler"
                        id="navbarDropdownMenuButton"
                        type="button"
                        onClick={() => this.handleMenuIconClick()}
                        onBlur={event => this.handleOnBlur(event)}>
                    <span className="navbar-toggler-icon"/>
                </button>

                {/** Search Bar **/}
                <div className="input-group px-3">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary"
                                type="submit"
                                onClick={() => this.handleSearch()}>
                            <span className="oi oi-magnifying-glass"/>
                        </button>
                    </div>
                </div>

                {/** Cart Button **/}
                <button className="btn"
                        type="button"
                        onClick={() => this.handleCartClick()}>
                    <span className="h3 oi oi-cart text-white"/>
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
            </nav>
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
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    setNavbarMenuVisibility,
    setMainViewMode
})(Navbar);
