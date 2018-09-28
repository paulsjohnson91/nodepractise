'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/userController');
    app.route('/users')
    .post(todoList.create_user);

    app.route('/users/:username')
    .get(todoList.check_user);
};
