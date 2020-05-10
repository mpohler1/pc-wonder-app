import React, {Component} from "react";
import {connect} from "react-redux";

const CLASS_LIST_WITH_BORDER_TOP = "row row-cols-1 border-top border-bottom border-secondary p-2 d-flex flex-row align-items-center";
const CLASS_LIST_WITHOUT_BORDER_TOP = "row row-cols-1 border-bottom border-secondary p-2 d-flex flex-row align-items-center";

class ItemList extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.items.map(item => (
                        <div className={item.product.id === this.props.items[0].product.id ? CLASS_LIST_WITH_BORDER_TOP : CLASS_LIST_WITHOUT_BORDER_TOP}>
                            <div className="col col-sm-3 col-xl-2 p-0">
                                <img className="card-img p-0"
                                     src={item.product.imageURL}
                                     alt={"Thumbnail for " + item.product.name}/>
                            </div>
                            <div className="col col-sm-2 p-2">
                                <p className="p-0">
                                    {item.product.name}
                                </p>
                            </div>
                            <div className="col col-sm-7 p-2">
                                <div className="input-group d-flex flex-row align-items-center">
                                    <p className="pl-sm-2 pr-2 ml-sm-auto">
                                        ${item.product.price} x
                                    </p>
                                    <input className="form-control quantity"
                                           type="number"
                                           placeholder="1"/>
                                    <p className="px-2">
                                        = ${item.product.price * item.quantity}
                                    </p>
                                    <button className="btn btn-danger ml-auto">
                                        X
                                    </button>
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
        items: state.cart.items
    }
};

export default connect(mapStateToProps, {

})(ItemList);
