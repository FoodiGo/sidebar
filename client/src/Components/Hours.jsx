import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Moment from 'react-moment';
import moment from 'moment';

class Hours extends React.Component {
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
  displayTime() {
    const currentTime = moment();
    console.log(currentTime);
  }

  render() {
    return (
      <div className='container'>
        <h1>Hours</h1>
        <Moment from="2015-04-19">1976-04-19T12:59-0500</Moment>
      </div>
    );
  }
}

export default Hours;
