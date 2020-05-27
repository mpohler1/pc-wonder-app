import React, {Component} from "react";
import {privacyPolicy} from "../../../resources/privacyPolicy";

class PrivacyPolicy extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex flex-row align-items-center page">
                    <div className="container privacy-policy my-2">
                        <div className="row mx-2">
                            <h1>
                                Privacy Policy
                            </h1>
                        </div>
                        <div className="row mx-2 my-3">
                            <p className="font-weight-light">
                                This privacy policy applies to {privacyPolicy.siteURL} and is effective {privacyPolicy.effectiveDate}.
                            </p>
                        </div>
                        {privacyPolicy.content.map(paragraph => (
                            <div className="row mx-2 my-3">
                                <p className="font-weight-light">
                                    {paragraph}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivacyPolicy;
