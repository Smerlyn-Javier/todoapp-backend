const { Todo } = require("../models");

class TodoController {
  async getTodo(req, res, next) {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    return res.send(todo);
  }

  async getTodos(req, res, next) {
    const todos = await Todo.find();
    return res.send(todos);
  }

  async create(req, res, next) {
    const { body } = req;
    const todo = await Todo.create([body]);
    return res.send(todo);
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const todo = await Todo.findByIdAndUpdate(id, body, { new: true });
    return res.send(todo);
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    return res.send(todo);
  }
}

module.exports = new TodoController();
