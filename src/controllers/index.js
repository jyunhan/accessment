var express = require('express');
var router = express.Router();
var { sequelize } = require('../database')
var { createQuestion } = require('../services/question')

/* GET home page. */
router.post('/question', async function(req, res, next) {
  // TODO: Use JoI if we want to detect object schema without typescript's type-validation.
  const { body } = req;
  const result = await createQuestion(body);
  return res.send('done');
});

module.exports = router;
