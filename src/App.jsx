import React from 'react';
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
                <MainView/>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
