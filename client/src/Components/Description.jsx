import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h1>From The Business</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
