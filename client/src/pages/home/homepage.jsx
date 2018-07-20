import React from "react";
import "./index.css";
import ImgPackage from "./package.png";

import InitParcelForm from "../../partials/forms/initial-parcel.jsx";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 ">
                            <div className="parcel-overview">
                                <h4>
                                    <p>
                                        Your parcel is all take care by our
                                        service partner
                                    </p>
                                </h4>
                                <img
                                    className="img-fluid"
                                    src={ImgPackage}
                                    alt=""
                                />
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.{" "}
                                </p>
                            </div>
                            <div className="mycontent-right" />
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="card border border-light custom-shadow">
                                <InitParcelForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
