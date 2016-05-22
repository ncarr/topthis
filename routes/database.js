var express = require('express');
var router = express.Router();
var entries = require('../models/actors.js');

/* GET entries from db. */
router.get('/entries', function (req, res) {
    entries.find(function (err, docs) {
        if (err) return next(err);
        res.json(docs);
    });
});


router.put('/upvote/:name', function (req, res, next) {
});

module.exports = router;
