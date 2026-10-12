const express = require("express");
const router = express.Router();
const placesController = require("../controllers/placesController");
const { verifyAdminToken } = require("../middleware/authMiddleware");

// Public API routes
router.get("/", placesController.getAllPlaces);
router.get("/:id", placesController.getPlaceById);

// Protected Admin routes (MULTER MUST RUN BEFORE CONTROLLER)
router.post(
  "/",
  verifyAdminToken,
  placesController.upload.single("imageFile"), // <-- Parses FormData fields into req.body
  placesController.createPlace,
);

router.put(
  "/:id",
  verifyAdminToken,
  placesController.upload.single("imageFile"), // <-- Parses FormData fields into req.body
  placesController.updatePlace,
);

router.delete("/:id", verifyAdminToken, placesController.deletePlace);

module.exports = router;
