import React from "react";
import "./Footer-with-map.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5>Get started</h5>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/Login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h5>About us</h5>
                            <ul>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/partners">Partner</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h5>Legal</h5>
                            <ul>
                                <li>
                                    <Link to="/term-of-service">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/term-of-use">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="footer-copyright">
                    <p>© 2018 All Copyright - CamboParcel </p>
                </div> */}
            </footer>
        </div>
    );
};

export default Footer;
