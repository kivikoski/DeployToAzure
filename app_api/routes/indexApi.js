const express = require('express');
const router = express.Router();

const ctrlApiduofpp = require('../controllers/ctrlApiduofpp');
const ctrlApisquadfpp = require('../controllers/ctrlApisquadfpp');

router

.route('/duofpp')
.get(ctrlApiduofpp.statslist)
.post(ctrlApiduofpp.addstats);

router

.route('/squadfpp')
.get(ctrlApisquadfpp.statslist)
.post(ctrlApisquadfpp.addstats);

module.exports = router;
