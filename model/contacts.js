var mongoose = require('mongoose');
var contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('Contact', contactSchema);