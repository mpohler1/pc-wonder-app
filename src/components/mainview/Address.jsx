import React, {Component} from "react";

class Address extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control" id="firstName" placeholder="First Name"/>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control" id="lastName" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="companyName">Company Name</label>
                            <input className="form-control" id="companyName" placeholder="Company Name"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-8">
                            <label htmlFor="streetAddress">Street Address</label>
                            <input className="form-control" id="streetAddress" placeholder="Street Address"/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="apartmentNumber">Apartment #</label>
                            <input className="form-control" id="apartmentNumber" placeholder="Apartment #"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" placeholder="City"/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" placeholder="ST"/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="zipAddress">Zip</label>
                            <input className="form-control" id="zip" placeholder="Zip"/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-6">
                            <label htmlFor="email">Email Address</label>
                            <input className="form-control" id="email" placeholder="email@address.com"/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input className="form-control" id="phone" placeholder="123-456-7890"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Address;
