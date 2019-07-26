const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { PORT, MONGO_URI } = require("./config");
const { TodoRoutes } = require("./routes");

app.use(express.json());

app.use("/api/todo", TodoRoutes);

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
