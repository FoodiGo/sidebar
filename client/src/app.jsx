import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import Delivery from './Components/Delivery.jsx';
import Description from './Components/Description.jsx';
import Hours from './Components/Hours.jsx';
import getInformation from './requests.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        location: { lat: 29, lng: 30 },
        hours: {
          sunday: [11, 2],
          restOfDays: [9, 10],
          saturday: [9, 11],
        },
        price: '$$',
      },
      location: { lat: 29.6648274, lng: -79.5157535 },
    };
    this.setData = this.setData.bind(this);
    this.setCurrentLocation = this.setCurrentLocation.bind(this);
  }
  componentDidMount() {
    getInformation(this.props.id, this.setData);
    this.setCurrentLocation();
  }
  setData(data) {
    this.setState({
      data: data,
    });
  }
  setCurrentLocation() {
    this.props.location.getCurrentPosition((position) => {
      this.setState({
        location: { lat: position.coords.latitude, lng: position.coords.longitude },
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="delivery">
          <Delivery
            id={this.props.id}
            minimumFee={this.state.data.minimumDelivery}
            lat={this.state.data.location.lat}
            long={this.state.data.location.lng}
            currentLocation={this.state.location}
          />
        </div>
        <div className="hours">
          <Hours id={this.props.id} price={this.state.data.price} />
        </div>
        <div className="hours">
          <Description description={this.state.data.text} />
        </div>
      </div>
    );
  }
}

export default App;
