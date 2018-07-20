import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

class CardService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: this.props.testService
        };
    }

    render() {
        return (
            <div className="col-sm-6">
                <div className="card alert-info mb-3 mt-3 text-dark custom-shadow">
                    <div className="card-body service-card">
                        <div className="d-flex flex-column service-d-flex">
                            <div className=" service-company-logo">
                                <img
                                    src={this.state.service.img}
                                    className="img-fluid img-thumbnail"
                                    alt={this.state.service.companyName}
                                />
                            </div>
                            <br/>
                            <div className="text-center">
                                <h2>
                                    <p>
                                        Company:{" "}
                                        {this.state.service.companyName}
                                    </p>
                                </h2>
                                <hr />
                                <h4>ETA: {this.state.service.eta}</h4>
                                <h2>Price: {this.state.service.price}</h2>
                            </div>
                            <br/>
                            <div>
                                <Link to="/payment">
                                    <button className="btn btn-success float-right w-100 custom-shadow-button">
                                        Payment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class CardInitialledParcel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parcel: {}
        };
    }

    initSubParcelInfo = this.props.parcelInfo.details.map(
        (subParcel, index) => {
            return subParcel.type === "package" ? (
                <tr key={index}>
                    <th scope="row" >{subParcel.name}</th>
                    <td>tpye: {subParcel.type}</td>
                    <td>qty: {subParcel.qty}</td>
                    <td>width: {subParcel.pWidth} cm</td>
                    <td>height: {subParcel.pHeight} cm</td>
                    <td>legth: {subParcel.pLength} cm</td>
                </tr>
            ) : (
                <tr key={index}>
                    <th scope="row">{subParcel.name}</th>
                    <td>tpye: {subParcel.type}</td>
                    <td>qty: {subParcel.qty}</td>
                    <td>size: {subParcel.envelopeSize}</td>
                    <td> </td>
                    <td> </td>
                </tr>
            );
        }
    );
    render() {
        return (
            <div className="card text-dark ">
                <div className="card-header">
                    <h3>Pre-shipping parcel</h3>
                </div>
                <div className="card-body">
                    <table className="table table-borderless table-responsive">
                        <tbody>
                            <tr>
                                <th scope="row">Shipping from</th>
                                <td>{this.props.parcelInfo.from}</td>
                            </tr>
                            <tr>
                                <th scope="row">Shipping to</th>
                                <td>{this.props.parcelInfo.to}</td>
                            </tr>
                            <tr>
                                <th scope="row">Shipping Type</th>
                                <td>{this.props.parcelInfo.sendType}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-borderless table-responsive">
                        <tbody>{this.initSubParcelInfo}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export { CardService, CardInitialledParcel };
