import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import {connect} from "react-redux";
import Brand from "./Brand";
import {SM_BREAKPOINT} from "../../resources/breakpoints";
import {setMobile, setScrollYAndStickyTop} from "../../actions/actions";

const CLASS_LIST_WITH_STICKY_TOP = "container-fluid navbar navbar-dark bg-dark pr-0 sticky-top";
const CLASS_LIST_WITHOUT_STICKY_TOP = "container-fluid navbar navbar-dark bg-dark pr-0";

class Navbar extends Component {

    handleResize() {
        if (this.props.mobile && window.innerWidth >= SM_BREAKPOINT) {
            this.props.setMobile(false)
        } else if (!this.props.mobile && window.innerWidth < SM_BREAKPOINT) {
            this.props.setMobile(true)
        }
    }

    handleScroll() {
        const newScrollY = window.scrollY;
        if (this.props.drawerVisible || newScrollY <= this.props.scrollY) {
            this.props.setScrollYAndStickyTop(newScrollY, true);
        } else {
            this.props.setScrollYAndStickyTop(newScrollY, false);
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('scroll', () => this.handleScroll());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
        window.removeEventListener('scroll', () => this.handleScroll());
    }

    render() {
        return (
            <nav className={this.props.stickyTop ? CLASS_LIST_WITH_STICKY_TOP : CLASS_LIST_WITHOUT_STICKY_TOP}>
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
        scrollY: state.navbar.scrollY,
        stickyTop: state.navbar.stickyTop,
        mobile: state.screen.mobile
    };
};

export default connect(mapStateToProps, {
    setMobile,
    setScrollYAndStickyTop
})(Navbar);
