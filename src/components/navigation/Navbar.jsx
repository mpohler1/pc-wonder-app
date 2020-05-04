import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import {connect} from "react-redux";
import Brand from "./Brand";
import {BOOTSTRAP_XS_BREAKPOINT} from "../../resources/breakpoints";
import {setNavbarMobile} from "../../actions/actions";

class Navbar extends Component {

    handleResize() {
        if (this.props.mobile && window.innerWidth >= BOOTSTRAP_XS_BREAKPOINT) {
            this.props.setNavbarMobile(false)
        } else if (!this.props.mobile && window.innerWidth < BOOTSTRAP_XS_BREAKPOINT) {
            this.props.setNavbarMobile(true)
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
    }

    render() {
        return (
            <nav className="container-fluid navbar navbar-dark bg-dark sticky-top pr-0">
                {
                    this.props.mobile
                        ?
                        <React.Fragment>
                            <div className="row container-fluid flex-nowrap pr-0">
                                <MenuButton/>
                                <Brand/>
                                <CartButton/>
                            </div>
                            <div className="row container-fluid flex-nowrap pr-0 py-2">
                                <SearchBar/>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="row container-fluid flex-nowrap pr-0">
                                <MenuButton/>
                                <Brand/>
                                <SearchBar/>
                                <CartButton/>
                            </div>
                        </React.Fragment>
                }
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        drawerVisible: state.navbar.drawerVisible,
        mobile: state.navbar.mobile
    };
};

export default connect(mapStateToProps, {
    setNavbarMobile
})(Navbar);
