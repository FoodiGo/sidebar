import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Delivery from './Components/Delivery.jsx';
import Description from './Components/Description.jsx';
import Hours from './Components/Hours.jsx';
import getInformation from './requests.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { location: { lat: 29, lng: 30 } },
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
    console.log(data)
    this.setState({
      data: data,
    });
  }
  setCurrentLocation() {
    this.props.location.getCurrentPosition((position)=> {
      this.setState({
        location: {lat: position.coords.latitude, lng: position.coords.longitude },
      }, ()=>{
        console.log(this.state.location);
      });
    });
  }

  render() {
    console.log(this.props.location);
    console.log(this.state.data)
    return (
      <div className='container'>
        <div className='delivery'>
          <Delivery
            minimumFee={this.state.data.minimumDelivery}
            lat={this.state.data.location.lat}
            long={this.state.data.location.lng}
            currentLocation={this.state.location}
          />
        </div>
        <div className='hours'>
          <Hours />
        </div>
        <div className='hours'>
          <Description description={this.state.data.text}/>
        </div>      
      </div>
    );
  }
}

export default App;
