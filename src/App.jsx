import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import MainView from "./components/mainview/MainView";
import Footer from "./components/footer/Footer";
import {connect} from "react-redux";
import {fetchAllProducts, fetchCategories} from "./service/apiService";
import {
    fetchCategoriesFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess
} from "./actions/actions";

class App extends Component{

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

    setProducts() {
        this.props.fetchProductsRequest();
        fetchAllProducts().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProductsSuccess(json);
            } else {
                this.props.fetchProductsFailure();
            }
        })
    }

    componentDidMount() {
        this.setCategories();
        this.setProducts();
    }

    render() {
        return (
            <div className="">
                <Navbar/>
                <MainView/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure
})(App);
