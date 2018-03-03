import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

ReactDOM.render(<App location={ window.navigator.geolocation } />, document.getElementById('app'));