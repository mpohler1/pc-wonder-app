import React, {Component} from "react";
import {CART} from "../../resources/routes";
import {connect} from "react-redux";
import {setRoute} from "../../actions/actions";

class CartButton extends Component {

    handleOnClick() {
        this.props.setMainViewMode(CART);
    }

    render() {
        return (
            <button className="btn ml-auto mr-0"
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
    setMainViewMode: setRoute
})(CartButton);
