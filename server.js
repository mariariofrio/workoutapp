const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./Develop/public/api"));
// require("./routes/html-routes")(app);
require("./Develop/routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});