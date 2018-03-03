const axios = require('axios');

module.exports = (state, callback) => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address= ${state} &key=AIzaSyDzg4llbXWFsnl5qhj5XjiKc8weqtjAZI8`)
    .then((response) => {
      const latLong = response.data.results[0].geometry.location;
      callback(latLong);
    })
    .catch((error) => {
      throw error;
    });
};

