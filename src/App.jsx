import React from 'react';
import Navbar from "./components/navbar/Navbar";
import MainView from "./components/mainview/MainView";
import Footer from "./components/footer/Footer";

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
