//x:year y:count_of_items - LineGraph
//x:name y:count_of_items wrt year- Bar Graph(4)
//x:state(top 5 states) y:count_of_items wrt year-Pie chart(4)

var express = require('express');
var router = express.Router();
var Disaster = require('../models/disaster');
router.get('/year', function (req, res, next) {
    Disaster.aggregate({ $group: {
            year: "$year", count:{$sum : 1}
        }})
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
});
router.get('/item', function (req, res, next) {
    Disaster.aggregate([
        { $match: {
            item: 2017
        }},
      { $group: {
            item: "$item", count:{$sum : 1}
        }}])
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
});

module.exports = router;
