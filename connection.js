const mysql = require("mysql2/promise");
require("dotenv").config();

// Create connection pool
const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

// CARS TABLE

// // SQL Query to create cars table if not exists
// const createCarsTableQuery = `
// CREATE TABLE IF NOT EXISTS cars (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   carName VARCHAR(255),
//   carDescription TEXT,
//   carSlogan VARCHAR(255),
//   carCurrency VARCHAR(10),
//   carRent VARCHAR(255),
//   carManufactureYear INT,
//   carBrandName VARCHAR(255),
//   carModelName VARCHAR(255),
//   carFuelType VARCHAR(100),
//   carMileage INT,
//   carGearSystem VARCHAR(100),
//   carSeatingCapacity INT,
//   carStorageCapacity INT,
//   carStatus BOOLEAN,
//   carAvailableDate DATETIME,
//   carImageMain VARCHAR(500),
//   carImageSub1 VARCHAR(500),
//   carImageSub2 VARCHAR(500),
//   carImageSub3 VARCHAR(500)
// );
//  `;

// BOOKINGS TABLE

// // SQL Query to create booking table if not exists
// const createBookingsTableQuery = `
// CREATE TABLE IF NOT EXISTS bookings (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   customerName VARCHAR(255),
//   customerMobile VARCHAR(20),
//   customerEmail VARCHAR(255),
//   customerGender VARCHAR(10),
//   customerAddress VARCHAR(255),
//   customerPAN VARCHAR(255),
//   customerImage VARCHAR(100),
//   customerChoosenCar VARCHAR(255),
//   customerChoosenCarFrom DATETIME,
//   customerChoosenCarTo DATETIME
// );
// `;

// Test DB connection + create table
async function initDatabase() {
  try {
    const connection = await db.getConnection();
    console.log("✅ MySQL connected successfully!");

    // Create cars table
    // await connection.query(createCarsTableQuery);
    // console.log("✅ 'cars' table is ready!");

    // Create bookings table
    // await connection.query(createBookingsTableQuery);
    // console.log("✅ 'bookings' table is ready!");

    connection.release();
  } catch (error) {
    console.error("❌ MySQL initialization failed:", error.message);
  }
}

initDatabase();

module.exports = db;
