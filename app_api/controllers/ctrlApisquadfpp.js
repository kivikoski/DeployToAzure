const mongoose = require('mongoose');

const squadfppModel = mongoose.model ('squadfppstats');

const statslist = function (req, res) {
    res

        .status(200)
        .json({"season" : "value"});
};

const addstats = function (req, res) {
    res.status(201).json({"Add stats" : "Work in progress"});

};

module.exports = {
    statslist,
    addstats
};