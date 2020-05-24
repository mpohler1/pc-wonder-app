import React, {Component} from "react";

class NoMatch extends Component {

    render() {
        return (
            <div className="container-fluid d-flex flex-row align-items-center page">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <h1 className="display-4">
                        Page not found.
                    </h1>
                    <p>
                        A page with this URL could not be found.
                    </p>
                </div>
            </div>
        );
    }
}

export default NoMatch;
