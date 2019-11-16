var express = require('express');
var router = express.Router();
const model = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.User.findAll().
    then(user => res.send(user)).
    catch(err => console.error(err));
});

module.exports = router;
