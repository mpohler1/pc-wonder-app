import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchCategoriesRequest,
    fetchCategoriesFailure,
    fetchCategoriesSuccess,
    setNavbarMenuVisibility
} from "../actions/actions";
import {fetchCategories} from "../service/apiService";

class Navbar extends Component {

    handleOnClick() {
        this.props.setNavbarMenuVisibility(!this.props.menuVisible);
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
                <button className="navbar-toggler"
                        id="navbarDropdownMenuButton"
                        type="button"
                        onClick={() => this.handleOnClick()}
                        onBlur={event => this.handleOnBlur(event)}>
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="input-group px-3">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">
                            <span className="oi oi-magnifying-glass"/>
                        </button>
                    </div>
                </div>
                <button className="btn" type="button">
                    <span className="h3 oi oi-cart text-white"/>
                </button>
                {
                    this.props.menuVisible &&
                    (
                        <div className="dropdown-menu show"
                             aria-labelledby="navbarDropdownMenuButton">
                            {this.props.categories.map(category => (
                                <React.Fragment>
                                    <button className="btn nav-item nav-link">
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
    setNavbarMenuVisibility
})(Navbar);
