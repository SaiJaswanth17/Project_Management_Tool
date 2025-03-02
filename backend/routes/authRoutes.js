import express from "express";
const router = express.Router();

// Mock user data for demonstration
const mockUser = {
  id: "123",
  name: "John Doe",
  email: "john@example.com"
};

// Authentication check endpoint
router.get("/me", (req, res) => {
  try {
    // In a real application, this would verify the user's session/token
    res.json({
      success: true,
      user: mockUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Authentication check failed"
    });
  }
});

export default router;
