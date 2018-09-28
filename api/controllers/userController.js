var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, challenge) {
    if (err)
      res.send(err);
    res.json(challenge);
  });
  };

exports.check_user = function(req, res) {
  User.getAuthenticated(req.params.username, req.body.password, function(err, user, reason) {
      if (err) throw err;

      // login was successful if we have a user
      if (user) {
          // handle login success
          console.log('login success');
          res.json({ message: 'Password Correct' });
          return;
      }

      // otherwise we can determine why we failed
      var reasons = User.failedLogin;
      switch (reason) {
          case reasons.NOT_FOUND:
          case reasons.PASSWORD_INCORRECT:
          res.json({ message: 'Password Incorrect' });
              // note: these cases are usually treated the same - don't tell
              // the user *why* the login failed, only that it did
              break;
          case reasons.MAX_ATTEMPTS:
              // send email or otherwise notify user that account is
              // temporarily locked
              res.json({ message: 'Locked Out' });
              break;
      }
  });
}
