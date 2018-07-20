import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavigationBar from "../layouts/header/header.jsx";
import Footer from "../layouts/footer/footer.jsx";

import HomePage from "../pages/home/homepage.jsx";
import ContactUsPage from "../pages/about/contact.jsx";
import LoginForm from "../pages/auth/sign-in.jsx";
import RegisterPage from "../pages/auth/register-user.jsx";
import ServicesPage from "../pages/services/service.jsx";
import AvailableServicePage from "../pages/services/available-service.jsx";
import UserPage from "../pages/user/user-profile.jsx";
import PaymentPage from "../pages/payment/payment.jsx";
import UserProfile from "../pages/user/user-profile.jsx";
import MyShippingPage from "../pages/user/my-shippment.jsx";
import PartnerPage from "../pages/services/partner.jsx";
import TermOfUsePage from "../pages/legal/term-of-use.jsx";
import TermOfServicePage from "../pages/legal/term-of-service.jsx";
import PrivacyPage from "../pages/legal/privacy-policy.jsx";

import PageNotFound from "../pages/404/page-not-found.jsx";
// import RegisterUser from "../views/pages/auth/register-user.jsx";
import userAuth from "./auth.jsx";

class AppRoute extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div
                        style={{
                            minHeight: "811px",
                            backgroundColor:"#d3d3d3"
                        }}
                    >
                        <NavigationBar />
                        <br />
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/login" component={LoginPage} exact />
                            <Route
                                path="/register"
                                component={RegisterPage}
                                exact
                            />
                            <Route
                                path="/contact-us"
                                component={ContactUsPage}
                                exact
                            />
                            <Route
                                path="/services"
                                component={ServicesPage}
                                exact
                            />

                            <Route
                                path="/generated-services"
                                component={AvailableServicePage}
                                exact
                            />

                            <Route
                                path="/partners"
                                component={PartnerPage}
                                exact
                            />
                            <Route
                                path="/term-of-use"
                                component={TermOfUsePage}
                                exact
                            />
                            <Route
                                path="/term-of-service"
                                component={TermOfServicePage}
                                exact
                            />
                            <Route
                                path="/privacy-policy"
                                component={PrivacyPage}
                                exact
                            />
                            <PrivateRoute
                                path="/user/profile"
                                component={UserPage}
                                exact
                            />
                            <PrivateRoute
                                path="/user/my-shipping"
                                component={MyShippingPage}
                                exact
                            />
                            <PrivateRoute
                                path="/payment"
                                component={PaymentPage}
                                exact
                            />
                            <PrivateRoute
                                path="/user/profile"
                                component={UserProfile}
                                exact
                            />
                            <Route component={PageNotFound} exact />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
    }

    login = () => {
        userAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: "/" }
        };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <LoginForm
                    redirectToReferrer={this.state.redirectToReferrer}
                    onLogIn={this.login}
                />
                {/* <button onClick={this.login}>Log in</button> */}
            </div>
        );
    }
}
export default AppRoute;
