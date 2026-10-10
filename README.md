# 🌴 Katunayake Tourist Day-Visit Planning & Information System

A modern web application built with **Node.js**, **Express**, **MySQL**, and **vanilla HTML5/CSS3/JavaScript (Tailwind CSS & Glassmorphism)** to consolidate verified information about places of interest within a **25 km radius** of Katunayake (Bandaranaike International Airport - CMB), Sri Lanka.

---

## 📌 Project Overview & Purpose

Tourists arriving at Bandaranaike International Airport (CMB) often face fragmented, unverified, and scattered local tourism information across informal channels.

This platform addresses the information gap by offering:

- **Centralized & Verified Data:** Key details for 10 top attractions within 25 km (opening hours, entry fees, distance from CMB, visit duration, and traveler tips).
- **1-Day Itinerary Builder:** A simple tool allowing tourists to aggregate chosen spots into a customized single-day schedule (with persistent browser storage).
- **Interactive Map View:** Geographic visualization using Leaflet.js & OpenStreetMap markers.
- **Strict Scope Boundary:** Informational & planning platform only — strictly excluding booking, payment, or reservation mechanisms.

---

## 🛠️ Technology Stack

| Layer        | Technology / Library     | Purpose                                          |
| :----------- | :----------------------- | :----------------------------------------------- |
| **Backend**  | Node.js (v18+)           | JavaScript Runtime Engine                        |
|              | Express.js               | Web server framework & routing                   |
|              | `mysql2`                 | Promise-based MySQL database driver              |
|              | `dotenv`                 | Environment variable management                  |
| **Frontend** | HTML5 / Modern JS (ES6+) | Application structure & dynamic DOM rendering    |
|              | Tailwind CSS (CDN)       | Utility-first responsive styling & layout        |
|              | FontAwesome 6            | UI icon library                                  |
|              | Leaflet.js               | Interactive mapping engine (OpenStreetMap tiles) |
|              | `localStorage` API       | Cross-page itinerary data persistence            |
| **Database** | MySQL                    | Structured database storage                      |

---

## 📂 Project Directory Structure

```text
katunayake-tourist-system/
├── backend/
│   ├── config/
│   │   └── db.js                 # MySQL database connection pool setup
│   ├── controllers/              # Business logic controllers (future expansion)
│   ├── middleware/               # Express custom middlewares
│   ├── routes/                   # Route handlers
│   ├── .env                      # Environment configuration
│   ├── package.json              # Backend dependencies & npm scripts
│   ├── schema.sql                # MySQL schema definitions
│   └── server.js                 # Express server & HTML route loader
├── frontend/
│   ├── css/
│   │   └── style.css             # Custom keyframe animations & styling
│   ├── js/
│   │   └── data.js               # Central attraction dataset & storage helpers
│   └── Pages/
│       ├── Admin/                # Administrative dashboard views
│       └── Users/                # Tourist public pages
│           ├── index.html        # Home & Places Listing Page
│           ├── placeDetails.html # Full details view per attraction
│           ├── mapView.html      # Standalone Leaflet interactive map
│           └── visitPlanBuilder.html # One-day itinerary builder
└── README.md                     # System documentation
```
