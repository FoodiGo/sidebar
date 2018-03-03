import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import classNames from 'classnames';


class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      selectedOption: 'deliveryOption',
      showFullComponent: true,
    };
    this.updateToggleState = this.updateToggleState.bind(this);
    this.updateShowFullComponent = this.updateShowFullComponent.bind(this);
  }
  componentDidMount() {
  }
  setData(data) {
    this.setState({
      data: data,
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

  render() {
    return (
      <div className='container'>
        <div className='title'>
          <h1>Order Delivery or Takeout</h1>
        </div>
        <form className='form'>
          <div className='optionSelect'>
            <label className='radio-check'>
              <input
                type="radio"
                value="deliveryOption"
                checked={this.state.selectedOption === 'deliveryOption'}
                onChange={e => this.updateToggleState(e.target.value)}
              />
              <span>Delivery</span>
            </label>
            <label className='radio-check'>
              <input
                type="radio"
                value="takeoutOption"
                checked={this.state.selectedOption === 'takeoutOption'}
                onChange={e => this.updateToggleState(e.target.value)}
              />
              <span>Takeout</span>
            </label>
          </div>
          <div className={classNames('feeBar', { 'hidden': !this.state.showFullComponent })}>
            <ul className={classNames('list', { 'hidden': !this.state.showFullComponent })}>
              <li className='li'>
                <div>
                  <b>Fee</b>
                </div>
                <b className='fee'>$2.99</b>
              </li>
              <li className='li'>
                <div>
                  <b>Delivery Min</b>
                </div>
                <b className='fee'>
                  {this.props.minimumFee}
                </b>
              </li>              
            </ul>
          </div>
          <div className={classNames('input', { 'hidden': !this.state.showFullComponent })}>
            <h5 className={classNames('h5', { 'hidden': !this.state.showFullComponent })}>Delivery Address</h5>
            <input placeholder='1 Yelp St., San Fransisco, CA 94105' className={classNames('infoInput', { 'hidden': !this.state.showFullComponent })} />
          </div>
        </form>
      </div>
    );
  }
}

export default Delivery;
