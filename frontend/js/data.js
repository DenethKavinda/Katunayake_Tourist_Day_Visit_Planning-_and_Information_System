// 10 Verified Places within 25 km of Katunayake (Bandaranaike International Airport)
const placesData = [
  {
    id: 1,
    name: "Muthurajawela Marsh & Wetland Sanctuary",
    category: "Nature & Wildlife",
    distanceKm: 12.5,
    hours: "07:00 AM - 05:00 PM",
    fee: "LKR 1,500 (Boat Tour)",
    duration: "2.5 Hours",
    latlng: [7.0421, 79.8782],
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    description:
      "Sri Lanka's largest coastal peat bog, home to over 100 species of migratory birds, monitor lizards, and mangrove flora.",
    tips: "Book an early morning boat excursion for optimal bird watching and cooler temperatures.",
  },
  {
    id: 2,
    name: "Negombo Beach & Coastline",
    category: "Beach & Coastal",
    distanceKm: 10.2,
    hours: "Open 24 Hours",
    fee: "Free Entry",
    duration: "2 - 3 Hours",
    latlng: [7.2306, 79.8386],
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    description:
      "Expansive golden sand beach ideal for coastal walks, sunset viewing, and enjoying fresh local seafood along the shore.",
    tips: "Best enjoyed in late afternoon for spectacular tropical sunsets and beachside dining.",
  },
  {
    id: 3,
    name: "Angurukaramulla Temple",
    category: "Culture & Heritage",
    distanceKm: 8.7,
    hours: "06:00 AM - 08:00 PM",
    fee: "Free (Donations Welcome)",
    duration: "1 Hour",
    latlng: [7.2115, 79.8492],
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    description:
      "Historic Buddhist temple famous for its imposing 6-meter Buddha statue, dragon entrance, and intricate historical murals.",
    tips: "Dress modestly covering shoulders and knees when walking into sacred shrine rooms.",
  },
  {
    id: 4,
    name: "St. Mary's Church Negombo",
    category: "History & Architecture",
    distanceKm: 9.4,
    hours: "06:00 AM - 07:00 PM",
    fee: "Free",
    duration: "45 Mins",
    latlng: [7.2081, 79.8358],
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80",
    description:
      "Grand Neoclassical church featuring magnificent ceiling paintings created by a local artist during the early 20th century.",
    tips: "Maintain silence during prayer hours and appreciate the detailed ceiling frescoes.",
  },
  {
    id: 5,
    name: "Hamilton & Dutch Canals",
    category: "History & Architecture",
    distanceKm: 7.8,
    hours: "Open 24 Hours",
    fee: "Free",
    duration: "1.5 Hours",
    latlng: [7.2045, 79.8371],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Historic 18th-century waterway system constructed during colonial times to transport spices across the coastal strip.",
    tips: "Rent a kayak or take a leisurely stroll along the shaded towpaths near the canal banks.",
  },
  {
    id: 6,
    name: "Negombo Lellama Fish Market",
    category: "Culture & Heritage",
    distanceKm: 9.1,
    hours: "05:00 AM - 12:00 PM",
    fee: "Free",
    duration: "1 Hour",
    latlng: [7.2012, 79.8309],
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    description:
      "Sri Lanka's second-largest open-air fish market where traditional catamaran crews bring in daily catches.",
    tips: "Visit early morning around 6:00 AM to see fish auctions and drying operations.",
  },
  {
    id: 7,
    name: "Dutch Fort Ruins",
    category: "History & Architecture",
    distanceKm: 9.0,
    hours: "08:00 AM - 05:00 PM",
    fee: "Free",
    duration: "45 Mins",
    latlng: [7.2005, 79.8315],
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
    description:
      "Colonial ramparts constructed by the Portuguese and later fortified by the Dutch in 1672 near Negombo lagoon entrance.",
    tips: "Combine this visit with the adjacent fish market and lagoon waterfront.",
  },
  {
    id: 8,
    name: "Katunayake Lagoon Waterfront",
    category: "Nature & Wildlife",
    distanceKm: 3.5,
    hours: "Open 24 Hours",
    fee: "Free",
    duration: "1 Hour",
    latlng: [7.1691, 79.8702],
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    description:
      "A tranquil lagoon body adjacent to the airport perimeter, perfect for watching traditional fishermen and sunset views.",
    tips: "Ideal short stop right after landing at CMB Airport.",
  },
  {
    id: 9,
    name: "Guruge Nature Park",
    category: "Culture & Heritage",
    distanceKm: 14.2,
    hours: "09:00 AM - 06:00 PM",
    fee: "LKR 800",
    duration: "2 - 3 Hours",
    latlng: [7.0852, 79.8974],
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    description:
      "Theme park showcasing ancient Sri Lankan history, village replicas, bird park, and leisure water activities.",
    tips: "Great choice for family day trips and cultural exhibitions.",
  },
  {
    id: 10,
    name: "Supun Sampath Artisan Village",
    category: "Culture & Heritage",
    distanceKm: 11.0,
    hours: "08:30 AM - 05:30 PM",
    fee: "Free",
    duration: "1 Hour",
    latlng: [7.225, 79.855],
    image:
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80",
    description:
      "Local craft showcase displaying traditional wood carvings, handmade Sri Lankan masks, and brass souvenirs.",
    tips: "Demonstration workshops are available upon request without additional fees.",
  },
];

// Helper functions for Plan Persistence across pages
function getStoredPlan() {
  return JSON.parse(localStorage.getItem("katunayake_tourist_plan") || "[]");
}

function savePlan(planArray) {
  localStorage.setItem("katunayake_tourist_plan", JSON.stringify(planArray));
}

function isPlaceInPlan(id) {
  return getStoredPlan().includes(id);
}

function updatePlanBadge() {
  const badge = document.getElementById("planBadge");
  if (badge) {
    const count = getStoredPlan().length;
    badge.innerText = count;
    if (count > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }
}
