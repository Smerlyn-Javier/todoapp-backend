const { Todo } = require("../models");

class TodoController {
  async getTodo(req, res, next) {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    return res.send(todo);
  }
}

module.exports = new TodoController();
