const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS & Request Parsing Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve static frontend assets & uploaded files
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(
  "/assets/uploads",
  express.static(path.join(__dirname, "../frontend/assets/uploads")),
);

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/places", require("./routes/placesRoutes"));
// Add this line under API Routes in server.js
app.use("/api/places", require("./routes/placesRoutes"));

// User Page Routes
const usersPagesPath = path.join(__dirname, "../frontend/Pages/Users");

app.get("/", (req, res) =>
  res.sendFile(path.join(usersPagesPath, "index.html")),
);
app.get("/index.html", (req, res) =>
  res.sendFile(path.join(usersPagesPath, "index.html")),
);
app.get("/placeDetails.html", (req, res) =>
  res.sendFile(path.join(usersPagesPath, "placeDetails.html")),
);
app.get("/mapView.html", (req, res) =>
  res.sendFile(path.join(usersPagesPath, "mapView.html")),
);
app.get("/visitPlanBuilder.html", (req, res) =>
  res.sendFile(path.join(usersPagesPath, "visitPlanBuilder.html")),
);

// Admin Page Routes
const adminPagesPath = path.join(__dirname, "../frontend/Pages/Admin");

app.get("/admin", (req, res) => res.redirect("/admin/login.html"));
app.get("/admin/login.html", (req, res) =>
  res.sendFile(path.join(adminPagesPath, "login.html")),
);
app.get("/admin/dashboard.html", (req, res) =>
  res.sendFile(path.join(adminPagesPath, "dashboard.html")),
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
