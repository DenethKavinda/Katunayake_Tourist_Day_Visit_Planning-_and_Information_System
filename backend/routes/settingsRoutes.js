const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settingsController");
const { verifyAdminToken } = require("../middleware/authMiddleware");

// Public route to fetch settings for header/footer rendering
router.get("/", settingsController.getSettings);

// Admin route to save header/footer settings
router.put(
  "/",
  verifyAdminToken,
  settingsController.updateSettings,
);

module.exports = router;
