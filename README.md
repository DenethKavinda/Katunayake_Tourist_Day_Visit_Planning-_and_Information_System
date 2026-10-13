<!-- ===================== ANIMATED HEADER ===================== -->
<div align="center">

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=600&size=24&duration=3200&pause=900&color=0E7C86&center=true&vCenter=true&width=700&lines=Landed+at+CMB%3F+Start+your+day+within+25+km+%F0%9F%8C%B4;10+places+%7C+hours+%7C+fees+%7C+distances+%7C+tips;Build+a+one-day+plan+in+a+few+clicks+%F0%9F%97%BA%EF%B8%8F;Information+and+planning+only.+No+bookings." alt="Typing animation" />
</a>

<br/>

![Node](https://img.shields.io/badge/Node.js-18%2B-5FB88B?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-7FD6D0?style=for-the-badge&logo=express&logoColor=0A5A62)
![MySQL](https://img.shields.io/badge/MySQL-8-4DA3C7?style=for-the-badge&logo=mysql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CDN-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Map-8FD694?style=for-the-badge&logo=leaflet&logoColor=white)
![Scope](https://img.shields.io/badge/No%20Booking-Info%20Only-FFB02E?style=for-the-badge)

**✈️ &nbsp; Bandaranaike International Airport (CMB) &nbsp;→&nbsp; 🌴 10 places &nbsp;→&nbsp; 🗓️ your perfect day**

</div>

---

## 🌊 Project Overview

Visitors arriving at Bandaranaike International Airport (CMB) often find tourism information scattered across informal channels. This platform puts it in one place.

<table>
<tr>
<td width="25%" align="center">📍<br/><b>Checked details</b><br/><sub>Hours, fees, distance, visit time and tips for 10 places</sub></td>
<td width="25%" align="center">🗓️<br/><b>1-day planner</b><br/><sub>Add, reorder and time your stops; saved in the browser</sub></td>
<td width="25%" align="center">🗺️<br/><b>Interactive map</b><br/><sub>Leaflet and OpenStreetMap with a 25 km ring</sub></td>
<td width="25%" align="center">🚫<br/><b>Clear scope</b><br/><sub>No booking, payment or reservation features</sub></td>
</tr>
</table>

> [!IMPORTANT]
> Opening hours and fees change. The values in `backend/data/places.json` are general guidance. Confirm each one locally before you publish.

---

## 🏝️ The 10 Places

| # | Place | Type | From CMB | Plan for |
| :-: | :-- | :-: | :-: | :-: |
| 1 | 🏖️ **Negombo Beach** | Beach | 6.1 km | 2 h |
| 2 | 🏰 **Negombo Dutch Fort** | Heritage | 6.2 km | 30 min |
| 3 | ⛪ **St. Mary's Church** | Religious | 6.4 km | 30 min |
| 4 | 🛶 **Negombo Lagoon** | Nature | 5.4 km | 1 h 30 min |
| 5 | 🛕 **Angurukaramulla Temple** | Religious | 7.6 km | 45 min |
| 6 | 🦆 **Muthurajawela Marsh** | Nature | 4.7 km | 2 h |
| 7 | 🌊 **Hamilton (Dutch) Canal** | Heritage | 5.9 km | 1 h 15 min |
| 8 | 🐟 **Negombo Fish Market** | Local Life | 7.0 km | 45 min |
| 9 | ✝️ **Duwa Island** | Religious | 11.6 km | 1 h |
| 10 | 🌳 **Henarathgoda Botanical Garden** | Nature | 15.6 km | 1 h 30 min |

<sub>Distances are approximate straight-line kilometres from CMB.</sub>

---

## 🎨 Features

- ✨ **Light tropical theme:** sea-foam, lagoon teal and mango colours, with glassmorphism panels
- 🛫 **Animated hero:** a plane flies across the sky while a 25 km radius ring ripples outward
- 🃏 **Cards that react:** a 3D tilt and a glow that follows the cursor
- 🔍 **Search and category filters:** find a place in seconds
- 🧭 **Itinerary timeline:** the line draws itself, and a start-time picker updates every stop's time
- 🖨️ **Print your plan:** a clean printable view with no buttons
- ♿ **Accessible:** visible keyboard focus, mobile layout, and `prefers-reduced-motion` support

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :-- | :-- | :-- |
| **Backend** | Node.js 18+, Express, `mysql2`, `dotenv` | API and static file server |
| **Frontend** | HTML5, ES6+, Tailwind CSS (CDN), FontAwesome 6 | Pages and styling |
| **Map** | Leaflet.js with OpenStreetMap tiles | Interactive map |
| **Storage** | MySQL, browser `localStorage` | Place data; saved itinerary |

---

## 📂 Project Structure

```text
katunayake-tourist-system/
├── backend/
│   ├── config/db.js              # MySQL connection pool
│   ├── controllers/              # (reserved for future logic)
│   ├── middleware/               # (reserved for future middleware)
│   ├── data/places.json          # Source data for the 10 places
│   ├── routes/places.js          # GET /api/places, /api/places/:id
│   ├── .env                      # Environment config
│   ├── package.json
│   ├── schema.sql                # Database, places, users, and site settings tables
│   ├── seed.js                   # Creates schema and loads places.json
│   └── server.js                 # Express server
├── frontend/
│   ├── css/style.css             # Theme, animations, effects
│   ├── js/
│   │   ├── data.js               # API calls, itinerary storage, navbar
│   │   └── effects.js            # Scroll reveal, card tilt, toast, progress bar
│   └── Pages/
│       ├── Admin/                # (reserved, not built yet)
│       └── Users/
│           ├── index.html              # Home and places list
│           ├── placeDetails.html       # Details per place
│           ├── mapView.html            # Leaflet map
│           └── visitPlanBuilder.html   # One-day itinerary builder
└── README.md
```

---

## 🚀 Quick Start

```bash
# 1. Set your MySQL user and password
#    edit backend/.env

# 2. Install, load the data, and start
cd backend
npm install
npm run seed      # creates the database, table and 10 places
npm start         # or: npm run dev
```

Then open **http://localhost:3000** 🎉

> [!TIP]
> If MySQL is not running, the API serves `data/places.json`, so you can still try the site.

<details>
<summary><b>⚙️ Environment variables (<code>backend/.env</code>)</b></summary>

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=katunayake_tourism
```

</details>

---

## 🔌 API

| Method | Route | Description |
| :-: | :-- | :-- |
| `GET` | `/api/places` | All places, nearest first. Optional `?category=Beach` |
| `GET` | `/api/places/:id` | One place |
| `GET` | `/api/health` | Health check |

---

## 📝 Notes

- The schema enforces `distance_km <= 25`.
- Itinerary times assume 20 minutes of travel between stops (`TRAVEL_MIN` in `visitPlanBuilder.html`).
- Plans are stored in each visitor's own browser and are not shared between devices.
- The `Admin` dashboard supports adding and editing places and public site settings.
- Administrators can edit the public header and footer from `/admin/dashboard.html`.

---

<div align="center">

<sub>🌴 Information and planning only. This site does not take bookings or payments. 🌴</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&height=140&color=0:FFD98A,50:7FD6D0,100:E8F7F5&section=footer&animation=twinkling" alt="footer wave" width="100%"/>

</div>
