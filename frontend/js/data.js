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

let siteSettings = {};

// Fetch header/footer settings from MySQL API
async function loadSiteSettings() {
  try {
    const res = await fetch("/api/settings");
    if (!res.ok) throw new Error("Failed to load settings");
    siteSettings = await res.json();
    applyHeaderFooterSettings();
    return siteSettings;
  } catch (err) {
    console.error("Error fetching site settings:", err);
  }
}

// Dynamically update DOM elements across all public pages
function applyHeaderFooterSettings() {
  const brandTitleEl = document.getElementById("headerBrandTitle");
  const brandSubtitleEl = document.getElementById("headerBrandSubtitle");
  if (brandTitleEl && siteSettings.brand_title) {
    brandTitleEl.textContent = siteSettings.brand_title;
  }
  if (brandSubtitleEl && siteSettings.brand_subtitle) {
    brandSubtitleEl.innerText = siteSettings.brand_subtitle;
  }

  const footerTitleEl = document.getElementById("footerTitle");
  const footerDescEl = document.getElementById("footerDescription");
  const footerCopyEl = document.getElementById("footerCopyright");

  if (footerTitleEl && siteSettings.footer_title) {
    footerTitleEl.innerText = siteSettings.footer_title;
  }
  if (footerDescEl && siteSettings.footer_description) {
    footerDescEl.innerText = siteSettings.footer_description;
  }
  if (footerCopyEl && siteSettings.footer_copyright) {
    footerCopyEl.innerText = siteSettings.footer_copyright;
  }
}
