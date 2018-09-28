'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Challenge = mongoose.model('Challenges'),
  User = mongoose.model('Users');

  exports.list_all_tasks = function(req, res) {
    var status = req.query.status
    if(status!=undefined){
      Task.find({status: status}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
    }
    else{
      Task.find({}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
    }
  };

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};







exports.list_all_challenges = function(req, res) {
  var status = req.query.status
  if(status!=undefined){
    Challenge.find({status: status}, function(err, challenge) {
      if (err)
        res.send(err);
      res.json(challenge);
    });
  }
  else{
    Challenge.find({}, function(err, challenge) {
      if (err)
        res.send(err);
      res.json(challenge);
    });
  }
};

exports.create_a_challenge = function(req, res) {
var new_challenge = new Challenge(req.body);
new_challenge.save(function(err, challenge) {
  if (err)
    res.send(err);
  res.json(challenge);
});
};


exports.read_a_challenge = function(req, res) {
Challenge.findById(req.params.challengeId, function(err, challenge) {
  if (err)
    res.send(err);
  res.json(challenge);
});
};


exports.update_a_challenge = function(req, res) {
  console.log("updating: " + req.params.challengeId)
Challenge.findOneAndUpdate({_id: req.params.challengeId}, req.body, {new: true}, function(err, challenge) {
  if (err)
    res.send(err);
  res.json(challenge);
});
};


exports.delete_a_challenge = function(req, res) {
  Challenge.remove({
    _id: req.params.challengeId
  }, function(err, challenge) {
    if (err)
      res.send(err);
    res.json({ message: 'Challenge successfully deleted' });
  });
};
