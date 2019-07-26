const express = require("express");
const app = express();
const { PORT } = require("./config");
const { TodoRoutes } = require("./routes");

app.use(express.json());

app.use("/api/todo", TodoRoutes);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
