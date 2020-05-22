import React, {Component} from "react";

class Payment extends Component {

    render() {

        return (
            <div className="row">
                <div className="col">
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="cardNumber">Card Number <span className="text-danger">*</span> </label>
                            <input className="form-control" id="cardNumber" disabled="true"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-4">
                            <label htmlFor="expiration">Expiration <span className="text-danger">*</span> </label>
                            <input className="form-control" id="expiration" disabled="true"/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="cvc">CVC/CVV <span className="text-danger">*</span> </label>
                            <input className="form-control" id="cvc" disabled="true"/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="zipPayment">Zip <span className="text-danger">*</span> </label>
                            <input className="form-control" id="zipPayment" disabled="true"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col">
                            <p className="text-danger">*Since this is a demo, payment has been disabled for your security.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
