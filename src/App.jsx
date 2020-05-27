import React, {Component} from 'react';
import Navbar from "./components/navigation/Navbar";
import MainView from "./components/mainview/MainView";
import Footer from "./components/footer/Footer";
import {connect} from "react-redux";
import {fetchCategories} from "./service/apiService";
import {
    fetchCategoriesFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess, setLargest, setMobile
} from "./actions/actions";
import Drawer from "./components/navigation/Drawer";
import {SM_BREAKPOINT, XXL_BREAKPOINT} from "./resources/breakpoints";
import ScrollToTop from "./components/utility/ScrollToTop";

class App extends Component{

    handleResize() {
        if (this.props.mobile && window.innerWidth >= SM_BREAKPOINT) {
            this.props.setMobile(false)
        } else if (!this.props.mobile && window.innerWidth < SM_BREAKPOINT) {
            this.props.setMobile(true);
        }

        if (this.props.largest && window.innerWidth < XXL_BREAKPOINT) {
            this.props.setLargest(false)
        } else if (!this.props.largest && window.innerWidth >= XXL_BREAKPOINT) {
            this.props.setLargest(true)
        }
    }

    setCategories() {
        this.props.fetchCategoriesRequest();
        fetchCategories().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchCategoriesSuccess(json);
            } else {
                this.props.fetchCategoriesFailure();
            }
        });
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
        this.setCategories();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
    }

    render() {
        return (
            <div className="min-vh-100 d-flex flex-column">
                <Navbar/>
                <MainView/>
                <Footer/>
                <Drawer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mobile: state.screen.mobile,
        largest: state.screen.largest
    }
};

export default connect(mapStateToProps, {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    setMobile,
    setLargest
})(App);
