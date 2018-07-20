import React from "react";

import UserSignIn from "../../../views/pages/auth/sign-in";
import RegisterUser from "../../../views/pages/auth/register-user";
const Authentication = () => {
    return (
        <div className="" style={{ backgroundColor: "#ddd" }}>
            <div className="container">
                <div className="row d-flex flex-row jumbotron " style={{backgroundColor:"transparent"}}>
                    <div className="col-md-4 align-self-start ">
                        <div
                            className="jumbotron"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <div className="card ">
                                <div className="card-header text-capitalize">
                                    sign in to your account
                                </div>
                                <div className="card-body">
                                    <UserSignIn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 align-self-center ">
                        <h4 className="align-middle ">
                            <p className="text-center text-white">OR</p>
                        </h4>
                    </div>
                    <div className="col-md-7 align-self-end">
                        <div
                            className="jumbotron p-4"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <div
                                className="card text-white"
                                style={{ backgroundColor: "#17a2b8" }}
                            >
                                <div className="card-header">
                                    Register an Account
                                </div>
                                <div className="card-body ">
                                    <RegisterUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
