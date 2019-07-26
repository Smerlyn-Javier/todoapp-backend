const { User } = require("../models");

class UserController {
  async getUser(req, res, next) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.send(user);
  }

  async getUsers(req, res, next) {
    const users = await User.find();
    return res.send(users);
  }

  async create(req, res, next) {
    const { body } = req;
    const user = await User.create([body]);
    return res.send(user);
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return res.send(user);
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    return res.send(user);
  }
}

module.exports = new UserController();
