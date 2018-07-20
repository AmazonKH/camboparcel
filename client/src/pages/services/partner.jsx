import React from "react";
import CardPartner from "../../components/card-partner.jsx";
class PartnerGroup extends React.Component {
    testServices = [
        {
            key: 0,
            companyName: "cambo-ticket",
            img:
                "https://cdn.techinasia.com/data/images/fb569072912f35a3e8d1ea8748d0a232.jpg",
            price: "10 usd",
            eta: "3-5 days",
            about: "https://www.camboticket.com/about"
        },
        {
            key: 1,
            companyName: "book-me-bus",
            img:
                "http://geeksincambodia.com/wp-content/uploads/2016/07/bookmebus.png",
            price: "9 usd",
            eta: "4-6 days",
            about: "https://bookmebus.com/en/about_us"
        },
        {
            key: 2,
            companyName: "airway",
            img:
                "https://skytraxratings.com/wp-content/uploads/2017/07/THAI_3-984x554.jpg",
            price: "9 usd",
            eta: "1 week",
            about: "https://www.google.com/"
        },
        {
            key: 3,
            companyName: "DHL",
            img:
                "https://www.africa-ontherise.com/wp-content/uploads/2014/08/DHL_Express.jpg",
            price: "15 usd",
            eta: "2-3 days",
            about:
                "https://www.logistics.dhl/kh-en/home/about-us/global-network.html"
        }
    ];

    renderAvailableServices = this.testServices.map(
        (servicesProvider, index) => {
            return <CardPartner key={index} testService={servicesProvider} />;
        }
    );
    render() {
        return (
            <div>
                <div className="container card bg-light">
                    <div className="card-body">
                        {" "}
                        <h2 className="mt-2 pt-2">Our Partner</h2>
                        <hr />
                        <div className="row ">
                            {this.renderAvailableServices}
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default PartnerGroup;
