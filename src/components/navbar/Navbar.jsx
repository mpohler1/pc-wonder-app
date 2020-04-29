import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchCategoriesRequest,
    fetchCategoriesFailure,
    fetchCategoriesSuccess
} from "../../actions/actions";
import {fetchCategories} from "../../service/apiService";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import CartButton from "./CartButton";

class Navbar extends Component {

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
                <Menu/>
                <SearchBar/>
                <CartButton/>
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
    fetchCategoriesFailure
})(Navbar);
