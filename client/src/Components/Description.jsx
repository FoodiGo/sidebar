import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Description = (props =>
  <div className="containerDescription">
    <h1>From The Business</h1>
    <p>{props.description}</p>
  </div>
);

export default Description;
