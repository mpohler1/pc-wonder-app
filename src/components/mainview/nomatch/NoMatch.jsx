import React, {Component} from "react";

class NoMatch extends Component {

    componentDidMount() {
        document.title = "Page Not Found";
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex flex-row align-items-center page">
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className="display-4">
                            Page not found.
                        </h1>
                        <p>
                            A page with this URL could not be found.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoMatch;
