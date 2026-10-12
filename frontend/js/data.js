// Data cache and LocalStorage itinerary helper
let placesData = [];

// Fetch places dynamically from Node.js Express + MySQL API
async function loadPlacesData() {
  try {
    const res = await fetch("/api/places");
    if (!res.ok) throw new Error("Failed to fetch places from server");
    placesData = await res.json();
    return placesData;
  } catch (err) {
    console.error("Error fetching tourism data from database:", err);
    return [];
  }
}

// LocalStorage helpers for the 1-Day Visit Itinerary
function getStoredPlan() {
  return JSON.parse(localStorage.getItem("katunayake_visit_plan")) || [];
}

function savePlan(planIds) {
  localStorage.setItem("katunayake_visit_plan", JSON.stringify(planIds));
}

function isPlaceInPlan(id) {
  return getStoredPlan().includes(id);
}

function updatePlanBadge() {
  const badge = document.getElementById("planBadge");
  if (!badge) return;
  const count = getStoredPlan().length;
  if (count > 0) {
    badge.innerText = count;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}
