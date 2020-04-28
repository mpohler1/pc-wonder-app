import React from 'react';
import SiteNavbar from "./components/SiteNavbar";
import CategoryNavbar from "./components/CategoryNavbar";
import MainView from "./components/MainView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SiteNavbar/>
      </div>
      <div className="row">
        <div className="col">
          <CategoryNavbar/>
        </div>
        <div className="col">
          <MainView/>
        </div>
      </div>
      <div className="row">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
