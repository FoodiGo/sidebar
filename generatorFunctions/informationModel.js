const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sidebar');

const informationSchema = mongoose.Schema({
  id: {
    type: Number,
    unqiue: true,
  },
  title: {
    type: String,
    unqiue: true,
  },
  location: Object,
  minimumDelivery: Number,
  price: {
    type: String,
    enum: ['$', '$$', '$$$', '$$$$'],
  },
  text: String,
  hours: Object,
});

const Information = mongoose.model('Information', informationSchema);

const getData = (callback) => {
  Information.find().sort({ id: 1 }).exec(callback);
};

const end = (sendConnectionState) => {
  let connected;
  mongoose.connection.close(() => {
    connected = mongoose.connection.readyState;
    sendConnectionState(connected);
  });
};

exports.Information = Information;
exports.getData = getData;
exports.end = end;
