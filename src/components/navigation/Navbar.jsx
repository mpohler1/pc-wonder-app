import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import {connect} from "react-redux";
import Brand from "./Brand";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark flex-nowrap sticky-top">
                <MenuButton/>
                <Brand/>
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

})(Navbar);
