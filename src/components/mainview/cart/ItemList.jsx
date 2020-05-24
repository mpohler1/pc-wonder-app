import React, {Component} from "react";
import {connect} from "react-redux";
import {removeItemFromCart, setDetailProduct, setQuantityInItemList} from "../../../actions/actions";
import {PRODUCT_DETAIL} from "../../../resources/routes";

const CLASS_LIST_WITH_BORDER_TOP = "row align-items-center border-top border-bottom border-secondary";
const CLASS_LIST_WITHOUT_BORDER_TOP = "row align-items-center border-bottom border-secondary";

class ItemList extends Component {

    handleMinusButtonClick(item) {
        if (item.quantity > 1) {
            this.props.setQuantityInItemList(item.product.id, item.quantity - 1);
        }
    }

    handlePlusButtonClick(item) {
        this.props.setQuantityInItemList(item.product.id, item.quantity+1);
    }

    handleProductClick(product) {
        this.props.setDetailProduct(product);

    }

    handleXButtonClick(item) {
        this.props.removeItemFromCart(item.product.id);
    }

    determineIfMinusButtonIsDisabled(button, item) {
        if (item.quantity > 1) {
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "true");
        }
    }

    render() {
        return (
            <div className="container-fluid cart-item-list">
                {
                    this.props.items.map(item => (
                        <div className={item.product.id === this.props.items[0].product.id ? CLASS_LIST_WITH_BORDER_TOP : CLASS_LIST_WITHOUT_BORDER_TOP}>
                            <div className="col col-md-4 col-lg-3">
                                <img className="btn card-img"
                                     src={item.product.imageURL}
                                     alt={"Thumbnail for" + item.product.name}
                                     onClick={() => this.handleProductClick(item.product)}/>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-12 col-md-3">
                                        <h5>
                                            {item.product.name}
                                        </h5>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <h5>
                                            ${parseFloat(item.product.price).toFixed(2)}
                                        </h5>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="btn-group align-items-center text-nowrap ml-n2">
                                            <button className="btn"
                                                    onClick={() => this.handleMinusButtonClick(item)}
                                                    ref={button => button && this.determineIfMinusButtonIsDisabled(button, item)}>
                                                <span className="h5 oi oi-minus text-secondary"/>
                                            </button>
                                            <h5>
                                                {item.quantity}
                                            </h5>
                                            <button className="btn"
                                                    onClick={() => this.handlePlusButtonClick(item)}>
                                                <span className="h5 oi oi-plus text-secondary"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="btn-group align-items-center text-nowrap ml-2">
                                            <button className="btn"
                                                    onClick={() => this.handleXButtonClick(item)}>
                                                <span className="h5 oi oi-x text-danger"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        mobile: state.screen.mobile
    }
};

export default connect(mapStateToProps, {
    setQuantityInItemList,
    removeItemFromCart,
    setDetailProduct
})(ItemList);
