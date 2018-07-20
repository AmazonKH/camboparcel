import React from "react";

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: "",
            payVia: "",
            expiredMonth: "",
            expiredYear: "",
            csc: "",
            password: ""
        };
    }
    testUser = {
        name: "duong",
        phoneNumber: "+855449521",
        email: "maduongrv@gmail.com",
        address: "Phnom Penh, Sen Sok"
    };

    onChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

        console.log(value);
    };

    paymentPartner = [
        {
            name: "WingMoney",
            icon:
                "https://www.wingmoney.com/wp-content/themes/wing/assets/images/page_template/logo.png"
        },
        {
            name: "TrueMoney",
            icon:
                "https://lh3.googleusercontent.com/imai0Bs-lDX_1KMQQ8YprYIesDiO8rqgR1b_daPd9szlwEi1eZWrEkdk_bYf6UvZHow=w300"
        },
        {
            name: "SmartLuy",
            icon: "http://www.uyfc.org/wp-content/uploads/2015/05/smartluy.png"
        },
        {
            name: "PiPay",
            icon:
                "http://static1.squarespace.com/static/5805fd862e69cf3e9bbdd2b0/t/5916d9e3f7e0ab8d47886af0/1494669796062/imageedit1.png?format=1000w"
        },
        {
            name: "PayGo",
            icon:
                "https://pbs.twimg.com/profile_images/642046778158809091/nnkIDC0Q_400x400.png"
        }
    ];

    paymentChoice = this.paymentPartner.map((paymentVia, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    name="payVia"
                    value={paymentVia.name}
                    onChange={e => this.onChange(e)}
                />
                <img src={paymentVia.icon} alt={paymentVia.name} />
            </label>
        );
    });

    render() {
        return (
            <div className="container">
                <h1 className="text-uppercase">Payment</h1>
                <hr /> <h4>1. Review Your Account</h4>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bd-secondary">
                            <div className="card-body">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th>Your name:</th>
                                            <td>{this.testUser.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone:</th>
                                            <td>{this.testUser.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{this.testUser.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td>{this.testUser.address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <h4>2. Payment Method</h4>
                <br />
                <div className="card mb-5">
                    <div className="card-body">
                        <h4>Tell your payment information</h4>
                        <div className="container">
                            <form>
                            <div className="form-group row">
                                    <div className="col-sm-3 mb-2">
                                        <label
                                            htmlFor="cardId"
                                            className="float-right"
                                        >
                                            Card Number
                                        </label>
                                    </div>
                                    <div className="col-sm-9 mb-2">
                                        <input
                                            max={4}
                                            min={0}
                                            className="form-control"
                                            type="number"
                                            name="cardId"
                                            id="cardId"
                                            value={this.state.cardId}
                                            onChange={e => this.onChange(e)}
                                            placeholder="enter your card Id"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mb-2" />
                                    <div className="col-sm-9 mb-2">
                                        {this.paymentChoice}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mb-2">
                                        <label
                                            htmlFor="expired"
                                            className="float-right"
                                        >
                                            expired Date
                                        </label>
                                    </div>
                                    <div className="col-sm-9 row mb-2">
                                        <div className="col-xs-6 col-sm-4 mb-2">
                                            <input
                                                type="text"
                                                pattern="\d*"
                                                name="expiredMonth"
                                                id="expiredMonth"
                                                className="form-control"
                                                placeholder="mm"
                                                value={this.state.expiredMonth}
                                                onChange={e => this.onChange(e)}
                                                maxLength={2}
                                            />
                                        </div>{" "}
                                        <div className="col-xs-6 col-sm-4 mb-2">
                                            <input
                                                maxLength={2}
                                                onChange={e => this.onChange(e)}
                                                value={this.state.expiredYear}
                                                type="tel"
                                                name="expiredYear"
                                                id="expiredYear"
                                                placeholder="yy"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mb-2">
                                        <label
                                            htmlFor="csc"
                                            className="float-right"
                                        >
                                            CSC
                                        </label>
                                    </div>
                                    <div className="col-sm-9 mb-2">
                                        <input
                                            value={this.state.csc}
                                            onChange={e => this.onChange(e)}
                                            type="number"
                                            name="csc"
                                            id="csc"
                                            placeholder="csc"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mb-2">
                                        <label
                                            htmlFor="password"
                                            className="float-right"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="col-sm-9  mb-2">
                                        <input
                                            value={this.state.password}
                                            onChange={e => this.onChange(e)}
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            id="password"
                                        />
                                    </div>
                                </div>

                                <input
                                    type="submit"
                                    value="Purchase"
                                    className="text-uppercase btn btn-warning float-right"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
