import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter person name"],
    trim: true,
    maxlength: [20, "Task name can not be more than 20 characters"]
  },
  email: {
    type: String,
    required: [true, "Enter email address "],
    lowercase: true,
    unique: true
  },
  dob: {
    type: String,
    required: [true, "Enter task name"],
    trim: true,
  },
  mobile_no: {
    type: String,
    required: [true, "Enter task name"],
  },
  password: {
    type: String,
    required: [true, "Enter task name"],
    minlength: 8,
  },
})

const Sign_up = mongoose.model("Credential", TaskSchema);

export default Sign_up;
