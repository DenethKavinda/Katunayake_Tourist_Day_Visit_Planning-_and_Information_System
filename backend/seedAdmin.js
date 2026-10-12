// backend/seedAdmin.js
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
require("dotenv").config();

async function seedAdmin() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Deneth@2002",
    database: process.env.DB_NAME || "katunayake_db",
  });

  const adminEmail = "admin@travel.com";
  const adminPlainPassword = "Admin123";

  // Check if admin already exists
  const [existing] = await connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [adminEmail],
  );
  if (existing.length > 0) {
    console.log("Admin account already exists.");
    process.exit(0);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(adminPlainPassword, 10);

  // Insert Admin
  await connection.execute(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
    [adminEmail, hashedPassword, "admin"],
  );

  console.log(`Admin created successfully! Email: ${adminEmail}`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Error seeding admin:", err);
  process.exit(1);
});
