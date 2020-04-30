import React, {Component} from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import CartButton from "./CartButton";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark flex-nowrap sticky-top">
                <Menu/>
                <SearchBar/>
                <CartButton/>
            </nav>
        );
    }
}

export default Navbar;
