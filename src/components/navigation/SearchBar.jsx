import React, {Component} from "react";
import {PRODUCT_GRID} from "../../resources/routes";
import {setSearchString} from "../../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class SearchBar extends Component {

    handleSearch() {
        this.props.history.push(PRODUCT_GRID + "/?search=" + this.props.searchString);
    }

    render() {
        return (
            <div className="input-group px-0 px-sm-3 py-0 mx-0">
                <input className="form-control"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       value={this.props.searchString}
                       onChange={event => this.props.setSearchString(event.target.value)}/>
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
    return {
        searchString: state.navbar.searchString
    }
};

export default withRouter(connect(mapStateToProps, {
    setSearchString
})(SearchBar));
