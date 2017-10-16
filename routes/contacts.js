var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var utils = require('../utils/utils');

/* GET users listing. */
router.get('/', function(req, res) {
  mongoose.model('Contact').find({}, function(err, data){
    if(err){
      utils.respond(res, utils.fail(err.code));
    } else {
      utils.respond(res, utils.succ(data));
    }
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  mongoose.model('Contact').create(req.body, function(err, data){
    if(err){
      utils.respond(res, utils.fail(err.code));
    } else {
      utils.respond(res, utils.succ(data));
    }
  });
});

router.delete('/:contact_id', function(req, res) {
  console.log(req.params.contact_id);
  mongoose.model('Contact').remove({_id: req.params.contact_id}, function(err, data){
    if(err){
      utils.respond(res, utils.fail(err.code));
    } else {
      utils.respond(res, utils.succ(data));
    }
  });
});

module.exports = router;
