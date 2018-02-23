const axios = require('axios');

module.exports = search = (state, callback) => {
  console.log(state)
  axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + state + '&key=AIzaSyAyctjoSZ8sxirAc6xiixNJUnqmmbuGop0')
    .then(response => {
      let latLong = response.data.results[0].geometry.location;
	    callback(latLong);
	  })
	  .catch(error  =>{
      console.log(error);
    });
};
