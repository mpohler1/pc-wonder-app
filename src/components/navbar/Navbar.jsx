import React, {Component} from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import CartButton from "./CartButton";

class Navbar extends Component {

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

export default Navbar;
