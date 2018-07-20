import React from "react";

import {
    CardService,
    CardInitialledParcel
} from "../../components/services-card.jsx";

class AvailableServices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    testParcel = {
        from: "Phnom Penh, Sen sok",
        to: "Kampong Cham, Srey sonthor",
        sendType: "dropoff",
        details: [
            {
                name: "Parcel A",
                type: "package",
                qty: 2,
                pWidth: 25,
                pHeight: 50,
                pLength: 50,
                pWeight: 30
            },
            {
                name: "Parcel B",
                type: "envelope",
                qty: "10",
                envelopeSize: "A6"
            },
            {
                name: "Parcel c",
                type: "package",
                qty: 2,
                pWidth: 25,
                pHeight: 50,
                pLength: 50,
                pWeight: 30
            },
            {
                name: "Parcel D",
                type: "envelope",
                qty: "10",
                envelopeSize: "A6"
            },
            {
                name: "Parcel E",
                type: "package",
                qty: 2,
                pWidth: 25,
                pHeight: 50,
                pLength: 50,
                pWeight: 30
            }
        ]
    };

    testServices = [
        {
            key: 0,
            companyName: "cambo-ticket",
            img:
                "https://cdn.techinasia.com/data/images/fb569072912f35a3e8d1ea8748d0a232.jpg",
            price: "10 usd",
            eta: "3-5 days"
        },
        {
            key: 1,
            companyName: "book-me-bus",
            img:
                "http://geeksincambodia.com/wp-content/uploads/2016/07/bookmebus.png",
            price: "9 usd",
            eta: "4-6 days"
        },
        {
            key: 2,
            companyName: "airway",
            img:
                "https://skytraxratings.com/wp-content/uploads/2017/07/THAI_3-984x554.jpg",
            price: "9 usd",
            eta: "1 week"
        },
        {
            key: 3,
            companyName: "DHL",
            img:
                "https://www.africa-ontherise.com/wp-content/uploads/2014/08/DHL_Express.jpg",
            price: "15 usd",
            eta: "2-3 days"
        }
    ];

    renderAvailableServices = this.testServices.map(
        (servicesProvider, index) => {
            return <CardService key={index} testService={servicesProvider} />;
        }
    );

    render() {
        return (
            <div className="container card">
                <div className="card-body">
                    <CardInitialledParcel parcelInfo={this.testParcel} />
                    <br />
                    <h2>here are available services:</h2>
                    <hr />
                    <div className="row">{this.renderAvailableServices}</div>
                </div>
            </div>
        );
    }
}
export default AvailableServices;
