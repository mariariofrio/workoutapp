const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  
useNewUrlParser: true,
useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
require("./routes/htmlroutes")(app);
app.use(require("./routes/apiroutes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
console.log("its working");
