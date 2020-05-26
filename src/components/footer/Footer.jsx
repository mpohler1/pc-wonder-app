import React, {Component} from "react";
import {connect} from "react-redux";

class Footer extends Component {

    render() {
        return (
            <div className="container-fluid bg-dark text-white-50 d-flex flex-row align-items-center flex-grow-1">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <div className="container footer">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pt-4">
                            <div className="col px-4 pb-4">
                                <div className="row">
                                    <div className="col d-flex flex-row align-items-center">
                                        <h1 className="display-4 text-white mx-auto">
                                            PC Wonder
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-3 px-4 pb-4">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="text-nowrap border-bottom border-secondary">
                                            Site Navigation
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                    >
                                                Home
                                            </button>
                                            <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                            >
                                                Cart
                                            </button>
                                            <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                            >
                                                Checkout
                                            </button>
                                            <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                            >
                                                Order Confirmation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-4 pb-4">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="text-nowrap border-bottom border-secondary">
                                            Product Categories
                                        </h5>
                                    </div>
                                </div>
                                <div className="row row-cols-1">
                                    <div className="col col-sm-2 col-md-4">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            {this.props.categories.slice(0, this.props.categories.length/2+1).map(category => (
                                                <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                            onClick={() => this.handleDrawerListClick(category.name.toLowerCase())}>
                                                        {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col col-sm-2 col-md-4">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            {this.props.categories.slice(this.props.categories.length/2+1, this.props.categories.length).map(category => (
                                                <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                    onClick={() => this.handleDrawerListClick(category.name.toLowerCase())}>
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-4 pb-4">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="text-nowrap border-bottom border-secondary">
                                            About This Website
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            This website was developed by Mason Pohler using JavaScript, JSX, and CSS. This website was
                                            built using ReactJS, Redux, and Bootstrap. <a className="text-white" href="https://github.com/mpohler1/pc-wonder-frontend">View Source</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list
    };
};

export default connect(mapStateToProps, {})(Footer);
