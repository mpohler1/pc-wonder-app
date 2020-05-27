import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {convertSpacesToHyphens} from "../../service/urlConverter";
import {CATEGORY_QUERY, PRODUCT_GRID} from "../../resources/routes";

class Footer extends Component {

    handleCategoryLinkClick(category) {
        this.props.history.push(PRODUCT_GRID + CATEGORY_QUERY + convertSpacesToHyphens(category.name.toLowerCase()));
    }

    render() {
        return (
            <div className="container-fluid bg-black text-white-50 d-flex flex-row align-items-center flex-grow-1 footer">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <div className="container footer-content">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pt-1 pt-sm-2 pt-md-4">
                            <div className="col px-1 pb-1">
                                <div className="row">
                                    <div className="col d-flex flex-row align-items-center">
                                        <h1 className="display-4 text-white mx-auto">
                                            PC Wonder
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-1 px-sm-2 px-md-4 pb-4">
                                <div className="row">
                                    <div className="col border-bottom border-secondary">
                                        <h5 className="text-nowrap">
                                            Site Navigation
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                    onClick={() => this.history.push(PRODUCT_GRID)}>
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
                            <div className="col px-1 px-sm-2 px-md-4 pb-4">
                                <div className="row">
                                    <div className="col border-bottom border-secondary">
                                        <h5 className="text-nowrap">
                                            Product Categories
                                        </h5>
                                    </div>
                                </div>
                                <div className="row row-cols-1">
                                    <div className="col col-sm-2 col-md-4">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            {this.props.categories.slice(0, this.props.categories.length/2+1).map(category => (
                                                <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                            onClick={() => this.handleCategoryLinkClick(category)}>
                                                        {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col col-sm-2 col-md-4 ml-md-3">
                                        <div className="d-flex flex-column flex-nowrap align-items-start">
                                            {this.props.categories.slice(this.props.categories.length/2+1, this.props.categories.length).map(category => (
                                                <button className="nav-item btn nav-link text-white-50 text-nowrap p-0"
                                                    onClick={() => this.handleCategoryLinkClick(category)}>
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-1 px-sm-2 px-md-4 pb-4">
                                <div className="row">
                                    <div className="col border-bottom border-secondary">
                                        <h5 className="text-nowrap">
                                            About This Website
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            This website was developed by Mason Pohler using JavaScript, JSX, and CSS. This website was
                                            built using ReactJS, Redux, and Bootstrap. <a className="text-white" href="https://github.com/mpohler1/pc-wonder-frontend">View Source</a>
                                            <br/><br/>
                                            Checkout Mason Pohler's <a className="text-white" href="https://masonpohler.com">Portfolio</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-2 border-top border-secondary mx-n4 mx-sm-n2 mx-md-n1">
                            <div className="col text-left text-nowrap pt-2">
                                <p>
                                    &copy; 2020 Mason Pohler
                                </p>
                            </div>
                            <div className="col text-right text-nowrap pt-2">
                                <p>
                                    Privacy Policy
                                </p>
                            </div>
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

export default withRouter(connect(mapStateToProps, {})(Footer));
