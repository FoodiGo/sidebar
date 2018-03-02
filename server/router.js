const express = require('express');
const { Information } = require('../generatorFunctions/informationModel.js');

const router = express.Router();

router.get('/:id/information', (req, res) => {
  Information.findOne({ id: 101 }, (err, restaurant) => {
    if (err) {
      throw err;
    }
    res.send(restaurant);
  });
});


module.exports = router;
