var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');

var Dishes = require('../models/Music');

var Music = express.Router();
Music.use(bodyParser.json());

MusicRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Music.find({}, function (err, music) {
        if (err) throw err;
        res.json(music);
    });
})

.get(Verify.verifyAdmin, function (req, res, next) {
    Music.find({}, function (err, dish) {
        if (err) throw err;
        res.json(music);
    });
})

.post(Verify.verifyAdmin, function (req, res, next) {
    Music.create(req.body, function (err, music) {
        if (err) throw err;
        console.log('Music Added!');
        var id = music._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the music with id: ' + id);
    });
})

.delete(Verify.verifyAdmin, function (req, res, next) {
    Music.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

Music.route('/:dishId')
.get(function (req, res, next) {
    Music.findById(req.params.musicId, function (err, dish) {
        if (err) throw err;
        res.json(music);
    });
})

.put(function (req, res, next) {
    Music.findByIdAndUpdate(req.params.musicId, {
        $set: req.body
    }, {
        new: true
    }, function (err, dish) {
        if (err) throw err;
        res.json(music);
    });
})

.delete(function (req, res, next) {
    Music.findByIdAndRemove(req.params.musicId, function (err, resp) {
			if (err) throw err;
        res.json(resp);
    });
});

Music.route('/:musicId/info')
.get(function (req, res, next) {
    music.findById(req.params.musicId, function (err, music) {
        if (err) throw err;
        res.json(music.info);
    });
})

.post(function (req, res, next) {
    music.findById(req.params.musicId, function (err, dish) {
        if (err) throw err;
        music.comments.push(req.body);
        music.save(function (err, music) {
            if (err) throw err;
            console.log('Updated Comments!');
            res.json(music);
        });
    });
})

.delete(function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        for (var i = (dish.comments.length - 1); i >= 0; i--) {
            dish.comments.id(dish.comments[i]._id).remove();
        }
        dish.save(function (err, result) {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Deleted all comments!');
        });
    });
});

dishRouter.route('/:dishId/comments/:commentId')
.get(function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        res.json(dish.comments.id(req.paarams.commentId));
    });
})

.put(function (req, res, next) {
    // We delete the existing commment and insert the updated
    // comment as a new comment
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err) throw err;
        dish.comments.id(req.params.commentId).remove();
        dish.comments.push(req.body);
        dish.save(function (err, dish) {
            if (err) throw err;
            console.log('Updated Comments!');
            res.json(dish);
        });
    });
})

.delete(function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        dish.comments.id(req.params.commentId).remove();
        dish.save(function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });
});

module.exports = dishRouter;
