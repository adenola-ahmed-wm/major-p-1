/**
 * Music.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;


var infoSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date released: {
    type: Number,
    required: true
  }
});
