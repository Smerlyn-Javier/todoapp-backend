const { User } = require("../models");
const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

class AuthController {
  async login(req, res, next) {
    const { username, password } = req.body;

    const userExits = await User.findOne({ username });

    if (!userExits) {
      const error = new Error();
      error.status = 404;
      error.message = "Username does not exists";
      throw error;
    }

    const validPassword = userExits.comparePasswords(password);

    if (!validPassword) {
      const error = new Error();
      error.status = 401;
      error.message = "Invalid password";
      throw error;
    }

    const user = userExits;
    const token = sign({ user }, JWT_SECRET, { expiresIn: "2h" });

    return res.send(token);
  }

  async register(req, res, next) {
    const { username } = req.body;
    const { body } = req;
    const userExists = await User.findOne({ username });

    if (userExists) {
      const error = new Error();
      error.status = 401;
      error.message = "User already exists";
      throw error;
    }

    const user = await User.create([body]);
    return res.send(user);
  }
}

module.exports = new AuthController();
