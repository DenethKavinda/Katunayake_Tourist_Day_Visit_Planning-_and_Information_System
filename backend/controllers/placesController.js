const pool = require("../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 1. Ensure 'uploads' directory exists on application start
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 2. Configure Multer Storage Engine for device uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage });

// 3. Get All Places (Public)
exports.getAllPlaces = async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM places ORDER BY id ASC");
    // Format latlng array for Leaflet Map compatibility
    const places = rows.map((p) => ({
      ...p,
      latlng: [parseFloat(p.lat), parseFloat(p.lng)],
    }));
    res.json(places);
  } catch (err) {
    console.error("Error fetching places:", err);
    res
      .status(500)
      .json({ message: "Error fetching places", error: err.message });
  }
};

// 4. Get Single Place by ID (Public)
exports.getPlaceById = async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM places WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Place not found" });
    }
    const p = rows[0];
    p.latlng = [parseFloat(p.lat), parseFloat(p.lng)];
    res.json(p);
  } catch (err) {
    console.error("Error fetching place by ID:", err);
    res
      .status(500)
      .json({ message: "Error fetching place", error: err.message });
  }
};

// 5. Create New Place (Admin Only)
exports.createPlace = async (req, res) => {
  try {
    const {
      name,
      category,
      distanceKm,
      description,
      hours,
      fee,
      duration,
      tips,
      lat,
      lng,
      imageOption,
      imageUrl,
    } = req.body || {};

    if (!name) {
      return res.status(400).json({ message: "Attraction name is required." });
    }

    // Determine whether to use external URL or uploaded device file path
    let finalImagePath = imageUrl || "";
    if (imageOption === "file" && req.file) {
      finalImagePath = `/uploads/${req.file.filename}`;
    }

    const [result] = await pool.execute(
      `INSERT INTO places (name, category, distanceKm, description, hours, fee, duration, tips, lat, lng, image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        category || "Nature & Wildlife",
        parseFloat(distanceKm) || 0.0,
        description || "",
        hours || "Open 24/7",
        fee || "Free Entry",
        duration || "1 Hour",
        tips || "",
        parseFloat(lat) || 7.1804,
        parseFloat(lng) || 79.8841,
        finalImagePath,
      ],
    );

    res.status(201).json({
      message: "Place created successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error creating place in DB:", err);
    res
      .status(500)
      .json({ message: "Server error creating place", error: err.message });
  }
};

// 6. Update Existing Place (Admin Only)
exports.updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      category,
      distanceKm,
      description,
      hours,
      fee,
      duration,
      tips,
      lat,
      lng,
      imageOption,
      imageUrl,
      existingImage,
    } = req.body || {};

    let finalImagePath = existingImage || "";
    if (imageOption === "url" && imageUrl) {
      finalImagePath = imageUrl;
    } else if (imageOption === "file" && req.file) {
      finalImagePath = `/uploads/${req.file.filename}`;
    }

    await pool.execute(
      `UPDATE places SET name=?, category=?, distanceKm=?, description=?, hours=?, fee=?, duration=?, tips=?, lat=?, lng=?, image=? WHERE id=?`,
      [
        name,
        category,
        parseFloat(distanceKm) || 0.0,
        description,
        hours,
        fee,
        duration,
        tips || "",
        parseFloat(lat) || 7.1804,
        parseFloat(lng) || 79.8841,
        finalImagePath,
        id,
      ],
    );

    res.json({ message: "Place updated successfully" });
  } catch (err) {
    console.error("Error updating place in DB:", err);
    res
      .status(500)
      .json({ message: "Server error updating place", error: err.message });
  }
};

// 7. Delete Place (Admin Only)
exports.deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute("DELETE FROM places WHERE id = ?", [id]);
    res.json({ message: "Place deleted successfully" });
  } catch (err) {
    console.error("Error deleting place from DB:", err);
    res
      .status(500)
      .json({ message: "Error deleting place", error: err.message });
  }
};
