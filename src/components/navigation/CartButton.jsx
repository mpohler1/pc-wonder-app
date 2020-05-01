import React, {Component} from "react";
import {CART} from "../../resources/viewMode";
import {connect} from "react-redux";
import {setMainViewMode} from "../../actions/actions";

class CartButton extends Component {

    handleOnClick() {
        this.props.setMainViewMode(CART);
    }

    render() {
        return (
            <button className="btn"
                    type="button"
                    onClick={() => this.handleOnClick()}>
                <span className="h3 oi oi-cart text-white"/>
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {
    setMainViewMode
})(CartButton);
