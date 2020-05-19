import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setAddressName,
    setAddressCompanyName,
    setAddressStreet,
    setAddressApartmentNumber,
    setAddressCountry,
    setAddressState,
    setAddressCity,
    setAddressZip,
    setAddressEmail,
    setAddressPhoneNumber,
    setCountryDropdownVisibility,
    setStateDropdownVisibility,
    setCityDropdownVisibility
} from "../../actions/actions";
import csc from "country-state-city";

class Address extends Component {

    handleCountryDropdownBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setCountryDropdownVisibility(false);
    }

    handleStateDropdownBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setStateDropdownVisibility(false);
    }

    handleCityDropdownBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setCityDropdownVisibility(false);
    }

    determineStateDropdownMenuClassList() {
        if (this.props.mobile && this.props.stateDropdownVisible) {
            return "dropdown-menu show";
        } else if (this.props.stateDropdownVisible) {
            return "dropdown-menu dropdown-menu-right show";
        } else {
            return "dropdown-menu";
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="form-row my-2">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input className="form-control"
                                   id="name"
                                   placeholder="Name"
                                   value={this.props.name}
                                   onChange={event => this.props.setAddressName(event.target.value)}/>
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
                        <div className="col-12 col-sm-8">
                            <label htmlFor="country">Country</label>
                            <div className="dropdown">
                                <input className="form-control text-left"
                                       type="button"
                                       id="country"
                                       value={this.props.country.name}
                                       onClick={() => this.props.setCountryDropdownVisibility(!this.props.countryDropdownVisible)}
                                       onBlur={event => this.handleCountryDropdownBlur(event)}/>
                                <div className={this.props.countryDropdownVisible ? "dropdown-menu show" : "dropdown-menu"}
                                     aria-labelledby="dropdownMenuButton">
                                    {
                                        csc.getAllCountries().map(country => (
                                            <button className="btn dropdown-item"
                                                    onClick={() => this.props.setAddressCountry(country)}>
                                                {country.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <label htmlFor="state">State</label>
                            <div className="dropdown">
                                <input className="form-control text-left"
                                       type="button"
                                       id="state"
                                       placeholder="ST"
                                       value={this.props.state.name}
                                       onClick={() => this.props.setStateDropdownVisibility(!this.props.stateDropdownVisible)}
                                       onBlur={event => this.handleStateDropdownBlur(event)}/>
                                <div className={this.determineStateDropdownMenuClassList()}>
                                    {
                                        csc.getStatesOfCountry(this.props.country.id).map(state => (
                                            <button className="btn dropdown-item"
                                                    onClick={() => this.props.setAddressState(state)}>
                                                {state.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-12 col-sm-8">
                            <label htmlFor="city">City</label>
                            <div className="dropdown">
                                <input className="form-control text-left"
                                       type="button"
                                       id="city"
                                       placeholder="City"
                                       value={this.props.city.name}
                                       onClick={() => this.props.setCityDropdownVisibility(!this.props.cityDropdownVisible)}
                                       onBlur={event => this.handleCityDropdownBlur(event)}/>
                                <div className={this.props.cityDropdownVisible ? "dropdown-menu show" : "dropdown-menu"}>
                                    {
                                        csc.getCitiesOfState(this.props.state.id).map(city => (
                                            <button className="btn dropdown-item"
                                                    onClick={() => this.props.setAddressCity(city)}>
                                                {city.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <label htmlFor="zipAddress">Zip</label>
                            <input className="form-control"
                                   id="zip"
                                   placeholder="Zip"
                                   value={this.props.zip}
                                   onChange={event => this.props.setAddressZip(event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="col-12 col-sm-7">
                            <label htmlFor="email">Email Address</label>
                            <input className="form-control"
                                   id="email"
                                   placeholder="email@address.com"
                                   value={this.props.email}
                                   onChange={event => this.props.setAddressEmail(event.target.value)}/>
                        </div>
                        <div className="col-12 col-sm-5">
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
        name: state.address.name,
        companyName: state.address.companyName,
        street: state.address.street,
        apartmentNumber: state.address.apartmentNumber,
        country: state.address.country,
        state: state.address.state,
        city: state.address.city,
        zip: state.address.zip,
        email: state.address.email,
        phoneNumber: state.address.phoneNumber,
        countryDropdownVisible: state.address.countryDropdownVisible,
        stateDropdownVisible: state.address.stateDropdownVisible,
        cityDropdownVisible: state.address.cityDropdownVisible,
        mobile: state.screen.mobile
    };
};

export default connect(mapStateToProps, {
    setAddressName,
    setAddressCompanyName,
    setAddressStreet,
    setAddressApartmentNumber,
    setAddressCountry,
    setAddressState,
    setAddressCity,
    setAddressZip,
    setAddressEmail,
    setAddressPhoneNumber,
    setCountryDropdownVisibility,
    setStateDropdownVisibility,
    setCityDropdownVisibility
})(Address);
