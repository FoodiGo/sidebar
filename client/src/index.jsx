import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';


ReactDOM.render(<App location={window.navigator.geolocation} id={101} />, document.getElementById('app'));
