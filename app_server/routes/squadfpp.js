var express = require('express');
var router = express.Router();

var ctrlsquadfpp = require('../controllers/ctrlsquadfpp');

/* GET home page. */
router.get('/', ctrlsquadfpp.statslist);

module.exports = router;
