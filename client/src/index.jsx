import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App id={104} location={window.navigator.geolocation} />, document.getElementById('app'));
