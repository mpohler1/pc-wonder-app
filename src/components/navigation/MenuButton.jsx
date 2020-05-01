import React, {Component} from "react";
import {connect} from "react-redux";
import {setNavbarMenuVisibility} from "../../actions/actions";

class MenuButton extends Component {

    handleOnClick() {
        this.props.setNavbarMenuVisibility(!this.props.menuVisible);
    }

    render() {
        return (
            <button className="navbar-toggler"
                    type="button"
                    onClick={() => this.handleOnClick()}>
                <span className="navbar-toggler-icon"/>
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuVisible: state.navbar.menuVisible
    }
};

export default connect(mapStateToProps, {
    setNavbarMenuVisibility,
})(MenuButton);
