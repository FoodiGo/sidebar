import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Moment from 'react-moment';
import moment from 'moment';
import classNames from 'classnames';
import GoHome from 'react-icons/lib/go/home';
import getInformation from '../requests.js';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'deliveryOption',
      showFullComponent: true,
      distanceTime: 6,
      currentTime: 12,
      minimumFee: 5,
    };
    this.updateToggleState = this.updateToggleState.bind(this);
    this.updateShowFullComponent = this.updateShowFullComponent.bind(this);
    this.distanceTimeAlgorithm = this.distanceTimeAlgorithm.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
  }
  componentDidMount() {
    getInformation(this.props.id, this.setPrice);
    this.distanceTimeAlgorithm(this.setCurrentTime);
  }
  setPrice(data) {
    this.setState({
      minimumFee: data.minimumDelivery,
    });
  }
  setCurrentTime(thisMoment) {
    const addHoursToNow = moment(thisMoment).add(this.state.distanceTime, 'hours').format('h:mm');
    this.setState({
      currentTime: addHoursToNow,
    });
  }
  updateToggleState(val) {
    this.setState({
      selectedOption: val,
    }, () => this.updateShowFullComponent());
  }
  updateShowFullComponent() {
    this.setState({
      showFullComponent: !this.state.showFullComponent,
    });
  }
  distanceTimeAlgorithm(callback) {
    const lat1 = this.props.currentLocation.lat;
    const lon1 = this.props.currentLocation.lng;
    const lat2 = this.props.lat;
    const lon2 = this.props.long;
    let distance = 0;
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    // Haversine formula
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2 - lat1); // deg2rad below
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      distance = d;
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    const hoursTil = distance / 60;
    this.setState({
      distanceTime: Math.round(hoursTil),
    }, () => {
      const currentMoment = moment();
      callback(currentMoment);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1><GoHome size={30} />Order Delivery or Takeout</h1>
        </div>
        <form className="form">
          <div className="optionSelect">
            <label className="radio-check">
              <input
                className="radios"
                type="radio"
                value="deliveryOption"
                checked={this.state.selectedOption === 'deliveryOption'}
                onChange={e => this.updateToggleState(e.target.value)}
              />
              <span>Delivery</span>
            </label>
            <label className="radio-check">
              <input
                className="radios"
                type="radio"
                value="takeoutOption"
                checked={this.state.selectedOption === 'takeoutOption'}
                onChange={e => this.updateToggleState(e.target.value)}
              />
              <span>Takeout</span>
            </label>
          </div>
          <div className={classNames('feeBar', { "hidden": !this.state.showFullComponent })}>
            <ul className={classNames('list', { "hidden": !this.state.showFullComponent })}>
              <li className="li">
                <div className="blockList">
                  <div>
                    <b>Fee</b>
                  </div>
                  <b className="fee">$2.99</b>
                </div>
              </li>
              <li className="li">
                <div className="blockList">
                  <div>
                    <b>Delivery Min</b>
                  </div>
                  <b className="fee">
                    {`$ ${this.state.minimumFee}`}
                  </b>
                </div>
              </li>
              <li className="li">
                <div className="blockList">
                  <div>
                    <b>Arrives by</b>
                  </div>
                  <b className="distance">
                    {this.state.currentTime}
                  </b>
                </div>
              </li>

            </ul>
          </div>
          <div className={classNames('input', { "hidden": !this.state.showFullComponent })}>
            <h5 className={classNames('h5', { "hidden": !this.state.showFullComponent })}>Delivery Address</h5>
            <input placeholder="1 Yelp St., San Fransisco, CA 94105" cols="30" className={classNames('infoInput', { "hidden": !this.state.showFullComponent })} />
          </div>
          <button className="btn">View Menu</button>
        </form>
      </div>
    );
  }
}

export default Delivery;
