const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const app = express();
const { PORT, MONGO_URI } = require("./config");
const { TodoRoutes, UserRoutes, AuthRoutes } = require("./routes");

app.use(express.json());

app.use("/api/todo", TodoRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).send(err.message);
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(0);
  });
