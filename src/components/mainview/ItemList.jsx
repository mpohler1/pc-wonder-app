import React, {Component} from "react";
import {connect} from "react-redux";

class ItemList extends Component {

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
                                    <img className="card-img product-cart-item p-0 m-0"
                                         src={item.product.imageURL}
                                         alt={("Thumbnail for " + item.product.name)}/>
                                    {
                                        this.props.mobile && <p className="p-0">{item.product.name}</p>
                                    }
                                </td>
                                {
                                    !this.props.mobile && <td>{item.product.name}</td>
                                }
                                <td>${parseInt(item.product.price).toFixed(2)}</td>
                                <td>
                                    <input className="form-control quantity"
                                           type="number"/>
                                </td>
                                {
                                    !this.props.mobile &&
                                    <td>
                                        ${parseInt(item.product.price * item.quantity).toFixed(2)}
                                    </td>
                                }
                                <td>
                                    <button className="btn btn-danger">
                                        X
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

})(ItemList);
