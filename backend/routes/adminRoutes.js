// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { verifyAdminToken } = require("../middleware/authMiddleware");

// Public route - anyone can see places
router.get("/places", async (req, res) => {
  // Return list of places...
});

// Protected route - ONLY admin token allowed
router.post("/places", verifyAdminToken, async (req, res) => {
  // Add new place logic...
  res.json({ message: "Place added successfully by Admin!" });
});

router.delete("/places/:id", verifyAdminToken, async (req, res) => {
  // Delete place logic...
  res.json({ message: "Place deleted successfully by Admin!" });
});

module.exports = router;
