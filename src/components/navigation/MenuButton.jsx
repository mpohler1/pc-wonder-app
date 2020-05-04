import React, {Component} from "react";
import {connect} from "react-redux";
import {setDrawerVisibility} from "../../actions/actions";

class MenuButton extends Component {

    handleOnClick() {
        this.props.setDrawerVisibility(!this.props.drawerVisible);
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
        drawerVisible: state.navbar.drawerVisible
    }
};

export default connect(mapStateToProps, {
    setDrawerVisibility,
})(MenuButton);
