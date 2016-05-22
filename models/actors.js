/**
 * Created by matthewham on 16-05-22.
 */
var mongoose = require('mongoose');

var actorSchema = new mongoose.Schema({
    name: String,
    image: String
});

module.exports = mongoose.model('actor', actorSchema);