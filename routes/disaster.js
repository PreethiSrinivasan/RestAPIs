//x:year y:count_of_items - LineGraph
//x:name y:count_of_items wrt year- Bar Graph(4)
//x:state(top 5 states) y:count_of_items wrt year-Pie chart(4)

var express = require('express');
var router = express.Router();
var Disaster = require('../models/disaster');
router.get('/states/2016', function (req, res, next) {
    Disaster.aggregate([

        { $match: {
            year: 2016
        }},
      { $group: {
            _id: "$state", count:{$sum : 1}
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
router.get('/states/2015', function (req, res, next) {
    Disaster.aggregate([

        { $match: {
            year: 2015
        }},
      { $group: {
            _id: "$state", count:{$sum : 1}
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
router.get('/states/2014', function (req, res, next) {
    Disaster.aggregate([

        { $match: {
            year: 2014
        }},
      { $group: {
            _id: "$state", count:{$sum : 1}
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
router.get('/states/2013', function (req, res, next) {
    Disaster.aggregate([

        { $match: {
            year: 2013
        }},
      { $group: {
            _id: "$state", count:{$sum : 1}
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
router.get('/year', function (req, res, next) {
    Disaster.aggregate({ $group: {
            _id: "$year", count:{$sum : 1}
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
router.get('/item/2017', function (req, res, next) {
    Disaster.aggregate([
        { $match: {
            year: 2017
        }},
      { $group: {
            _id: "$item", count:{$sum : 1}
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
router.get('/item/2016', function (req, res, next) {
    Disaster.aggregate([
        { $match: {
            year: 2016
        }},
      { $group: {
            _id: "$item", count:{$sum : 1}
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
router.get('/item/2015', function (req, res, next) {
    Disaster.aggregate([
        { $match: {
            year: 2015
        }},
      { $group: {
            _id: "$item", count:{$sum : 1}
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
router.get('/item/2014', function (req, res, next) {
    Disaster.aggregate([
        { $match: {
            year: 2014
        }},
      { $group: {
            _id: "$item", count:{$sum : 1}
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
