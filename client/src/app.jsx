import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Delivery from './Components/Delivery.jsx';
import Description from './Components/Description.jsx';
import Hours from './Components/Hours.jsx';
import { getInformation } from './requests.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
  }
  setData(data) {
    this.setState({
      data: data,
    });
  }

  render() {
    console.log(this.props.location);
    return (
      <div className='container'>
        <div className='delivery'>
          <Delivery
            minimumFee={this.state.data.minimumDelivery}
            lat={this.state.data.location.lat}
            long={this.state.data.location.lng}
          />
        </div>
        <div className='hours'>
          <Hours />
        </div>
        <div className='hours'>
          <Description />
        </div>        
      </div>
    );
  }
}

export default App;
