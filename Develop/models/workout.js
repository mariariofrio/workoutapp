// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema(
//   {
//       day:{
//           type: Date,
//           default: () => new Date()
//       },
//       exercises: [
//           {
//               type:{
//                   type: String,
//                   trim: true,
//                   required: "type of an exercise"
//               },
//               name:{
//                   type: String,
//                   trim: true,
//                   required: "name of an exercise"
//               },
//               duration:{
//                   type: Number,
//                   required: "exercise duration"
//               },
//               distance:{
//                   type: Number
//               },
//               weight:{
//                   type: Number
//               },
//               sets:{
//                   type: Number
//               },
//               reps:{
//                   type: Number
//               }
//           }
//       ]
//   }
// )

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;
