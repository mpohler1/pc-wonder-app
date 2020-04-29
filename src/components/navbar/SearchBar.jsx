import React, {Component} from "react";
import {PRODUCT_GRID} from "../../resources/viewMode";
import {setMainViewMode} from "../../actions/actions";
import {connect} from "react-redux";

class SearchBar extends Component {

    handleSearch() {
        this.props.setMainViewMode(PRODUCT_GRID);
    }

    render() {
        return (
            <div className="input-group px-3">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary"
                            type="submit"
                            onClick={() => this.handleSearch()}>
                        <span className="oi oi-magnifying-glass"/>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {setMainViewMode})(SearchBar);
