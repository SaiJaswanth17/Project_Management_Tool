import express from "express"
import Project from "../models/Project.js"

const router = express.Router()

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get a specific project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Create a new project
router.post("/", async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
  })

  try {
    const newProject = await project.save()
    res.status(201).json(newProject)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Update a project
router.patch("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    if (req.body.name) project.name = req.body.name
    if (req.body.description) project.description = req.body.description
    if (req.body.status) project.status = req.body.status

    const updatedProject = await project.save()
    res.json(updatedProject)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    await project.remove()
    res.json({ message: "Project deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add a task to a project
router.post("/:id/tasks", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    project.tasks.push({
      title: req.body.title,
      description: req.body.description,
    })

    const updatedProject = await project.save()
    res.status(201).json(updatedProject)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router

