import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Description extends React.Component {
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
    return (
      <div className='container'>
        <h1>Description</h1>
      </div>
    );
  }
}

export default Description;