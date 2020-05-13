import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setAddressFirstName,
    setAddressLastName,
    setAddressCompanyName,
    setAddressStreet,
    setAddressApartmentNumber,
    setAddressCity,
    setAddressState,
    setAddressZip,
    setAddressEmail,
    setAddressPhoneNumber
} from "../../actions/actions";

class Address extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control"
                                   id="firstName"
                                   placeholder="First Name"
                                   value={this.props.firstName}
                                   onChange={event => this.props.setAddressFirstName(event.target.value)}/>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control"
                                   id="lastName"
                                   placeholder="Last Name"
                                   value={this.props.lastName}
                                   onChange={event => this.props.setAddressLastName(event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="companyName">Company Name</label>
                            <input className="form-control"
                                   id="companyName"
                                   placeholder="Company Name"
                                   value={this.props.companyName}
                                   onChange={event => this.props.setAddressCompanyName(event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-8">
                            <label htmlFor="streetAddress">Street Address</label>
                            <input className="form-control"
                                   id="streetAddress"
                                   placeholder="Street Address"
                                   value={this.props.street}
                                   onChange={event => this.props.setAddressStreet(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="apartmentNumber">Apartment #</label>
                            <input className="form-control"
                                   id="apartmentNumber"
                                   placeholder="Apartment #"
                                   value={this.props.apartmentNumber}
                                   onChange={event => this.props.setAddressApartmentNumber(event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control"
                                   id="city"
                                   placeholder="City"
                                   value={this.props.city}
                                   onChange={event => this.props.setAddressCity(event.target.value)}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="state">State</label>
                            <input className="form-control"
                                   id="state"
                                   placeholder="ST"
                                   value={this.props.state}
                                   onChange={event => this.props.setAddressState(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="zipAddress">Zip</label>
                            <input className="form-control"
                                   id="zip"
                                   placeholder="Zip"
                                   value={this.props.zip}
                                   onChange={event => this.props.setAddressZip(event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-6">
                            <label htmlFor="email">Email Address</label>
                            <input className="form-control"
                                   id="email"
                                   placeholder="email@address.com"
                                   value={this.props.email}
                                   onChange={event => this.props.setAddressEmail(event.target.value)}/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input className="form-control"
                                   id="phone"
                                   placeholder="123-456-7890"
                                   value={this.props.phoneNumber}
                                   onChange={event => this.props.setAddressPhoneNumber(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        firstName: state.address.firstName,
        lastName: state.address.lastName,
        companyName: state.address.companyName,
        street: state.address.street,
        apartmentNumber: state.address.apartmentNumber,
        city: state.address.city,
        state: state.address.state,
        zip: state.address.zip,
        email: state.address.email,
        phoneNumber: state.address.phoneNumber
    };
};

export default connect(mapStateToProps, {
    setAddressFirstName,
    setAddressLastName,
    setAddressCompanyName,
    setAddressStreet,
    setAddressApartmentNumber,
    setAddressCity,
    setAddressState,
    setAddressZip,
    setAddressEmail,
    setAddressPhoneNumber
})(Address);
