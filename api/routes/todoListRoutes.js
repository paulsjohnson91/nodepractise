'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/challenges')
      .get(todoList.list_all_challenges)
      .post(todoList.create_a_challenge);


    app.route('/challenges/:challengeId')
      .get(todoList.read_a_challenge)
      .put(todoList.update_a_challenge)
      .delete(todoList.delete_a_challenge);

};
