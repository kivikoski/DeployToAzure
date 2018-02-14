var express = require('express');
var router = express.Router();

var ctrlduofpp = require('../controllers/ctrlduofpp');

/* GET home page. */
router.get('/', ctrlduofpp.statslist);

module.exports = router;
