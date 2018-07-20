import React from "react";
import axios from "axios";

import "./profile.css";
import ChangeProfileImage from "../../components/modal-chang-profile-image";
import EditProfileInfoModal from "../../components/modal-change-user-information";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { firstName: "", lastName: "", email: "" },
            editState: false
        };
    }

    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        let token = user.token;
        axios
            .get(`/api/users/me`, { headers: { "X-Auth": token } })
            .then(res => {
                this.setState({ user: res.data });
            });
    }

    render() {
        return (
            <div className="container card">
                <div className="card-body">
                    <h3>Your Profile</h3>
                    <hr />
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <div className="card custom-pf-card text-light">
                                <div className="card-body ">
                                    <div className="d-flex justify-content-center profile-photo">
                                        <div className="image-cropper">
                                            <img
                                                className="rounded"
                                                src="https://image.flaticon.com/icons/svg/236/236832.svg"
                                                alt="profile"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <ChangeProfileImage />
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: 25,
                                            marginTop: 20
                                        }}
                                    >
                                        <p className="text-capitalize text-center">
                                            Name: {this.state.user.firstName}{" "}
                                            {this.state.user.lastName}
                                        </p>
                                        <p className="text-center">
                                            Email: {this.state.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-6">
                            <div className="card edit-pf-form pl-2">
                                <div className="card-body">
                                    <h4 className="text-capitalize">
                                        basic information
                                    </h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="firstName">
                                                    First Name:
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="firstName"
                                                    disabled={
                                                        !this.state.editState
                                                    }
                                                    value={
                                                        this.state.user
                                                            .firstName
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="lastName">
                                                    Last Name:
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="lastName"
                                                    disabled={
                                                        !this.state.editState
                                                    }
                                                    value={
                                                        this.state.user
                                                            .firstName
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email Address:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emai"
                                            disabled={!this.state.editState}
                                            value={this.state.user.email}
                                        />
                                    </div>

                                    <EditProfileInfoModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
