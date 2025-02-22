import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["To Do", "In Progress", "Done"], default: "To Do" },
})

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["Active", "Completed"], default: "Active" },
    tasks: [taskSchema],
  },
  { timestamps: true },
)

const Project = mongoose.model("Project", projectSchema)

export default Project

