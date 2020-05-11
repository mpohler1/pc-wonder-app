import React, {Component} from "react";
import {connect} from "react-redux";
import {removeItemFromCart, setDetailProduct, setMainViewMode, setQuantityInItemList} from "../../actions/actions";
import {PRODUCT_DETAIL} from "../../resources/viewMode";

class ItemList extends Component {

    handleProductClick(product) {
        this.props.setDetailProduct(product);
        this.props.setMainViewMode(PRODUCT_DETAIL);
    }

    handleQuantityChange(item, event) {
        const quantity = parseInt(event.target.value);
        if (quantity > 0 || isNaN(quantity)) {
            this.props.setQuantityInItemList(item.product.id, quantity);
        }
    }

    handleXButtonClick(item) {
        this.props.removeItemFromCart(item.product.id);
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    {
                        this.props.mobile &&
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col"/>
                            </tr>
                    }
                    {
                        !this.props.mobile &&
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Remove</th>
                            </tr>
                    }
                </thead>
                <tbody>
                    {
                        this.props.items.map(item => (
                            <tr>
                                <td>
                                    <img className="btn card-img product-cart-item p-0 m-0"
                                         src={item.product.imageURL}
                                         alt={("Thumbnail for " + item.product.name)}
                                         onClick={() => this.handleProductClick(item.product)}/>
                                    {
                                        this.props.mobile &&
                                            <p className="p-0">
                                                {item.product.name}
                                            </p>
                                    }
                                </td>
                                {
                                    !this.props.mobile && <td>{item.product.name}</td>
                                }
                                <td>${parseFloat(item.product.price).toFixed(2)}</td>
                                <td>
                                    <input className="form-control quantity"
                                           type="number"
                                           value={item.quantity}
                                           onChange={event => this.handleQuantityChange(item, event)}/>
                                </td>
                                {
                                    !this.props.mobile &&
                                    <td>
                                        ${isNaN(item.quantity) ? "0.00" : (item.product.price * item.quantity).toFixed(2)}
                                    </td>
                                }
                                <td>
                                    <button className="btn ml-auto mr-0"
                                            type="button"
                                            onClick={() => this.handleXButtonClick(item)}>
                                        <span className="h5 oi oi-x text-danger"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
    setDetailProduct,
    setMainViewMode
})(ItemList);
