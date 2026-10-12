// backend/config/db.js
const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Deneth@2002",
  database: process.env.DB_NAME || "katunayake_db",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection on server start
pool
  .getConnection()
  .then((connection) => {
    console.log("MySQL Database connected successfully!");
    connection.release();
  })
  .catch((err) => {
    console.error("MySQL connection error:", err.message);
  });

module.exports = pool;
