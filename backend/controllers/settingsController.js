const pool = require("../config/db");
const allowedKeys = new Set(["brand_title", "brand_subtitle", "footer_title", "footer_description", "footer_copyright"]);

// Get all site settings (Public)
exports.getSettings = async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM settings");
    // Convert array [{setting_key: 'brand_title', setting_value: '...'}] to clean Object
    const settingsObj = {};
    rows.forEach((row) => {
      settingsObj[row.setting_key] = row.setting_value;
    });
    res.json(settingsObj);
  } catch (err) {
    console.error("Error fetching settings:", err);
    res
      .status(500)
      .json({ message: "Error fetching settings", error: err.message });
  }
};

// Update site settings (Admin Only)
exports.updateSettings = async (req, res) => {
  try {
    const settings = req.body || {};
    const updates = {};

    for (const [key, rawValue] of Object.entries(settings)) {
      if (!allowedKeys.has(key)) continue;
      const value = String(rawValue).trim();
      updates[key] = value;
    }

    for (const [key, value] of Object.entries(updates)) {
      await pool.execute(
        `INSERT INTO settings (setting_key, setting_value) 
         VALUES (?, ?) 
         ON DUPLICATE KEY UPDATE setting_value = ?`,
        [key, value, value],
      );
    }

    res.json({ message: "Settings updated successfully" });
  } catch (err) {
    console.error("Error updating settings:", err);
    res
      .status(500)
      .json({ message: "Error saving settings", error: err.message });
  }
};
