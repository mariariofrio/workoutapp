const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  type: {
    type: Number,
    
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", transactionSchema);

module.exports = Workout;
