import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter task name"],
    trim: true,
    maxlength: [20, "Task name can not be more than 20 characters"],
  },
  // email: {
  //   type: String,
  //   required: [true, "Enter task name"],
  //   trim: true,
  //   maxlength: [20, "Task name can not be more than 20 characters"],
  // },
  // password: {
  //   type: String,
  //   required: [true, "Enter task name"],
  //   trim: true,
  //   maxlength: [20, "Task name can not be more than 20 characters"],
  // },
  // dob: {
  //   type: String,
  //   required: [true, "Enter task name"],
  //   trim: true,
  //   maxlength: [20, "Task name can not be more than 20 characters"],
  // },
  // mobile_no: {
  //   type: String,
  //   required: [true, "Enter task name"],
  //   trim: true,
  //   maxlength: [20, "Task name can not be more than 20 characters"],
  // },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", TaskSchema);
export default Task;
