import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Header from "../../layouts/header/header";

class UserSignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false,
            lastPath: "/",
            email: "",
            password: "",
            isRemember: false,
            missingEmail: "",
            missingPassword: ""
        };
    }

    onChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (name === "email") {
            this.setState({ missingEmail: "" });
        }
        if (name === "password") {
            this.setState({ missingPassword: "" });
        }
    };

    login = () => {
        this.props.onLogIn();
    };

    onSubmit = event => {
        event.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
            isRemember: this.state.isRemember
        };

        axios.post(`/api/users/login`, user).then(
            res => {
                alert("enjoy your work");
                let currentUser = {
                    token: res.data.token,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    email: res.data.user.email
                };

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(currentUser)
                );
                this.login();
            },
            error => {
                alert("invalid email or password");
            }
        );

        // this.login();

        // console.log(user);
    };
    render() {
        return (
            <div className="container">
                <div
                    className="row mt-4"
                >
                    <div className="col-md-6 offset-md-3">
                        <div className="card custom-shadow">
                            <div className="card-header">
                                <h3>Login to your account</h3>
                            </div>
                            <div className="card-body">
                                <form
                                    // method="POST"
                                    onSubmit={this.onSubmit}
                                >
                                    <div className="form-group">
                                        <label htmlFor="inputEmailLogIn">
                                            Email address
                                        </label>
                                        <input
                                            onChange={e => this.onChange(e)}
                                            value={this.state.email}
                                            name="email"
                                            type="email"
                                            className={
                                                "form-control form-shadow-control" +
                                                this.state.missingEmail
                                            }
                                            id="inputEmailLogIn"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputLogInPassword">
                                            Password
                                        </label>
                                        <input
                                            onChange={e => this.onChange(e)}
                                            value={this.state.password}
                                            type="password"
                                            name="password"
                                            className={
                                                "form-control  form-shadow-control" +
                                                this.state.missingPassword
                                            }
                                            id="inputLogInPassword"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group form-check">
                                        <input
                                            onChange={e => this.onChange(e)}
                                            value={this.state.isRemember}
                                            name="isRemember"
                                            type="checkbox"
                                            className="form-check-input"
                                            id="checkRememberMe"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkRememberMe"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-success w-100 text-uppercase custom-shadow-button"
                                        value="SIGN IN"
                                    />
                                </form>
                            </div>

                            <div className="card-footer">
                                <Link to="/register">Create an account </Link>{" "}
                                if you don't have once.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSignIn;
