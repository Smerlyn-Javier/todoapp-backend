const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String }
});

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;

  next();
});

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
