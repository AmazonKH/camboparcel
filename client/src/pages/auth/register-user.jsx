import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const RegisterUser = () => {

// };

class RegisterUser extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAgreed: false,
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        agreementError: ""
    };

    onChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

        // console.log(value);
    };

    handleSubmit(event) {
        let userInformation = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            isAgreed: this.state.isAgreed
        };

        if (this.formValidate(userInformation)) {
            axios
                .post("/api/users/signup", userInformation)
                .then(res => {
                    console.log(res.data);
                    console.log(res);
                })
                .then((window.location = "/login"));
            // .then((window.location = "/login"));
        }
        event.preventDefault();
    }

    formValidate(user) {
        return (
            user.firstName.length > 1 &&
            user.lastName.length > 1 &&
            user.password.length > 5 &&
            this.state.confirmPassword === user.password &&
            user.isAgreed === true
        );
    }

    render() {
        return (
            <div className="container">
                <div
                    className="row mt-4 "
                >
                    <div className="col-md-6 offset-md-3">
                        <div className="card custom-shadow">
                            <div className="card-header">
                                <h3>Register Your Account</h3>
                            </div>
                            <div className="card-body">
                                <form
                                    method="POST"
                                    onSubmit={e => this.handleSubmit(e)}
                                >
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="inputFirstName">
                                                    Firstname:
                                                </label>
                                                <input
                                                    onChange={e =>
                                                        this.onChange(e)
                                                    }
                                                    value={this.state.firstName}
                                                    autoComplete="firstName"
                                                    name="firstName"
                                                    type="text"
                                                    className="form-control form-shadow-control"
                                                    id="inputFirstName"
                                                    placeholder="Firstname"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="inputLastName">
                                                    Lastname:
                                                </label>
                                                <input
                                                    onChange={e =>
                                                        this.onChange(e)
                                                    }
                                                    value={this.state.lastName}
                                                    name="lastName"
                                                    type="text"
                                                    autoComplete="lastName"
                                                    className="form-control form-shadow-control"
                                                    id="inputLastName"
                                                    placeholder="Lastname"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-6" />
                                    <div className="form-group">
                                        <label htmlFor="inputRegisterEmail">
                                            Email address
                                        </label>
                                        <input
                                            onChange={e => this.onChange(e)}
                                            value={this.state.email}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="form-control form-shadow-control"
                                            id="inputRegisterEmail"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="inputNewPassword">
                                                    Password
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    onChange={e =>
                                                        this.onChange(e)
                                                    }
                                                    value={this.state.password}
                                                    name="password"
                                                    type="password"
                                                    className="form-control form-shadow-control"
                                                    id="inputNewPassword"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="inputConfirmPassword">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    onChange={e =>
                                                        this.onChange(e)
                                                    }
                                                    value={
                                                        this.state
                                                            .confirmPassword
                                                    }
                                                    name="confirmPassword"
                                                    type="password"
                                                    autoComplete="off"
                                                    className="form-control form-shadow-control"
                                                    id="inputConfirmPassword"
                                                    placeholder="Confirm password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group form-check ml-3">
                                        <input
                                            onChange={e => this.onChange(e)}
                                            checked={this.state.isAgreed}
                                            name="isAgreed"
                                            type="checkbox"
                                            className="form-check-input"
                                            id="checkAgreement"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkAgreement"
                                        >
                                            Are you agree with our<a href="">
                                                {" "}
                                                term and agreement
                                            </a>{" "}
                                            ?
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        name="RegisterBtn"
                                        className="btn btn-success w-100 text-uppercase custom-shadow-button"
                                    >
                                        sign in
                                    </button>
                                </form>
                            </div>

                            <div className="card-footer">
                                <Link to="/login">Login to Your account </Link>{" "}
                                if you already have once.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterUser;
