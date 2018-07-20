import React from 'react';
import CardShippment from './card-shippment';

export default class MyShippment extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value :[{
            _id: "5b3b4c07c58a8f2888b7047f",
            type: {
            dropOff: true,
            doorToDoor: false,
            economy: true,
            timedDelivery: false
            },
            vehicles: [
            {
            type: "Truck"
            },
            {
            type: "Bus"
            },
            {
            type: "Taxi"
            }
            ],
            company: {
            _id: "5b34524119b0885480d49084",
            name: "Bayon VIP",
            logo: "https://logos-download.com/wp-content/uploads/2016/06/FedEx_logo.png",
            address: "#3E0, Sangkat Phsar Thmei I, St. 126 Pasteur, Khan Daun Penh, Phnom Penh"
            },
            category: "Standard",
            price: 27,
            ref_trip: [
            {
            _id: "5b3b301ea1ca3800e8824106",
            departTime: "09:00",
            eta: "15:00 Today"
            },
            {
            _id: "5b3b308fa1ca3800e8824107",
            departTime: "12:00",
            eta: "18:00 Today"
            },
            {
            _id: "5b3b309fa1ca3800e8824108",
            departTime: "20:00",
            eta: "2:00 Tomorrow"
            }
            ],
            trips: [
            {
            _id: "5b3b4c07c58a8f2888b70482",
            tripId: "5b3b308fa1ca3800e8824107",
            totalVolume: 2400,
            totalWeight: 800
            },
            {
            _id: "5b3b4c07c58a8f2888b70481",
            tripId: "5b3b309fa1ca3800e8824108",
            totalVolume: 2400,
            totalWeight: 800
            },
            {
            _id: "5b3b4c07c58a8f2888b70480",
            tripId: "5b3b301ea1ca3800e8824106",
            totalVolume: 2400,
            totalWeight: 800
            }
            ]
            }]
      } 
      this.deleteShip = this.deleteShip.bind(this);
    }
    deleteShip(v){
      for(var i = 0; i < this.state.value.length; i++){
        if(this.state.value[i] === v){
           delete this.state.value[i]
        }
      }
      this.setState({
        value:this.state.value
      })
    }
  render(){
    let {value} = this.state;
    return(
      <div className="container bg-color ">
        <label id="label-form">MY SHIPMENTS</label>
          {value.map((v,index) => {
              return <CardShippment
                    key={[index]}
                    imgUrl={value[index].company.logo}
                    name={value[index].company.name}
                    eta={value[index].ref_trip[value[index].ref_trip.length-1].eta}
                    shipFrom={value[index].shipFrom}
                    shipTo={value[index].shipTo}
                    price={value[index].price}
                    deleteShip={this.deleteShip.bind(this,v)}
                    >{v}</CardShippment>
            })} 
      </div>
      );
  }
}