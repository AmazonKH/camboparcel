import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import FormAwesome from "./form-awesome.jsx";

// import DynamicPartial from "./dynamic-form"

export default class InitialParcelForm extends React.Component {
    render() {
        const provinces = [
            "Choose Province",
            "Phnom Penh",
            "Prey Veng",
            "Kandal",
            "Kampong Thom",
            "Siem Reap",
            "Preah Vihea",
            "Battambang",
            "Pursat",
            "Kratie",
            "Kampong Cham",
            "Sihanouk Vile",
            "Kep",
            "Kampong Speu",
            "Takeo",
            "Rattanak Kiri",
            "Mondul Kiri",
            "Steung Treng",
            "Svay Rieng",
            "Banteaymeanchey",
            "kompot",
            "Tbong Khmum",
            "Kampong Chnang",
            "Koh Kong",
            "Pailin",
            "Oddarmeanchey"
        ];
        const provinceChoices = provinces.map((province, index) => (
            <option key={index}>{province}</option>
        ));
        return (
            <div className="parcel-form">
                <h2>
                    <p>Parcel Information</p>
                </h2>
                <hr />
                <form method="POST">
                    <h4>
                        <p>Your Information</p>
                    </h4>
                    <div className="form-group row">
                        <label
                            htmlFor="selectOriginProvince"
                            className="col-sm-2 col-form-label"
                        >
                            FROM:
                        </label>
                        <div className="col-sm-4">
                            <select
                                className="custom-select custom-shadow-select"
                                autoComplete="address-level1"
                                id="selectOriginProvince"
                            >
                                {provinceChoices}
                            </select>
                        </div>

                        <div className="col-sm-6">
                            <input
                                type="text"
                                id="originAddress"
                                autoComplete="address-level1"
                                className="form-control form-shadow-control"
                                placeholder="Your origin address"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="selectDestinationAddress"
                            className="col-sm-2 col-form-label"
                        >
                            TO:
                        </label>
                        <div className="col-sm-4">
                            <select
                                className="custom-select custom-shadow-select"
                                id="selectDestinationAddress"
                                autoComplete="address-level1"
                            >
                                {provinceChoices}
                            </select>
                        </div>

                        <div className="col-sm-6">
                            <input
                                autoComplete="address-level1"
                                type="text"
                                id="destinationAddress"
                                className="form-control form-shadow-control"
                                placeholder="Your destination address"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="shippingType"
                            className="col-sm-2 col-form-label"
                        >
                            TYPE:
                        </label>
                        <div className="col-sm-5">
                            <div className="from-check ml-4">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value="dropOff"
                                    defaultChecked
                                    name="shippingType"
                                    id="typeDropOff"
                                />
                                <label htmlFor="typeDropOff">Drop Off</label>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="from-check ml-4">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value="Pick Up"
                                    name="shippingType"
                                    id="typePickUp"
                                />
                                <label htmlFor="typePickUp">Pick Up</label>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <h4>
                        <p>Parcel Information</p>
                    </h4>

                    <FormAwesome />

                    <div>
                        <Link to="/generated-services">
                            <button
                                type="submit"
                                className="btn btn-success float-right custom-shadow-button"
                            >
                                START
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}
