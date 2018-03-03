const express = require('express');
const { Information } = require('../generatorFunctions/informationModel.js');

const router = express.Router();

router.get('/:id/information', (req, res) => {
  const id = req.params.id;
  const idSplit = id.split(":");
  Information.findOne({ id: idSplit[1] }, (err, restaurant) => {
    if (err) {
      throw err;
    }
    res.json(restaurant);
  });
});


module.exports = router;
