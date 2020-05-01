import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import {connect} from "react-redux";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark flex-nowrap">
                <MenuButton/>
                <h3 className="text-white text-nowrap ml-3 py-2">
                    PC Wonder
                </h3>
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
