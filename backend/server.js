const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON & Form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Serve static frontend assets (css, js, images)
app.use(express.static(path.join(__dirname, "../frontend")));

// 2. Define page routes pointing to frontend/Pages/Users
const usersPagesPath = path.join(__dirname, "../frontend/Pages/Users");

app.get("/", (req, res) => {
  res.sendFile(path.join(usersPagesPath, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(usersPagesPath, "index.html"));
});

app.get("/placeDetails.html", (req, res) => {
  res.sendFile(path.join(usersPagesPath, "placeDetails.html"));
});

app.get("/mapView.html", (req, res) => {
  res.sendFile(path.join(usersPagesPath, "mapView.html"));
});

app.get("/visitPlanBuilder.html", (req, res) => {
  res.sendFile(path.join(usersPagesPath, "visitPlanBuilder.html"));
});

// Admin Route
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Pages/Admin/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
