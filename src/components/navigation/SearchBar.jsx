import React, {Component} from "react";
import {PRODUCT_GRID, SEARCH_QUERY} from "../../resources/routes";
import {setSearchBarText} from "../../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as queryString from "query-string";

class SearchBar extends Component {

    handleSearch() {
        this.props.history.push(PRODUCT_GRID + SEARCH_QUERY + this.props.searchBarText);
    }

    determineSearchFieldValue() {
        if (this.props.location.search) {
            const parsedQuery = queryString.parse(this.props.location.search);
            if (parsedQuery.search && parsedQuery.search !== this.props.searchBarText) {
                this.props.setSearchBarText(parsedQuery.search);
            }
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.determineSearchFieldValue();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location !== this.props.location) {
            this.determineSearchFieldValue();
        }
    }

    render() {
        return (
            <div className="input-group px-0 px-sm-3 py-0 mx-0">
                <input className="form-control"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       value={this.props.searchBarText}
                       onChange={event => this.props.setSearchBarText(event.target.value)}/>
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
        searchBarText: state.navbar.searchBarText
    }
};

export default withRouter(connect(mapStateToProps, {
    setSearchBarText
})(SearchBar));
