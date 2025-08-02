require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to MongoDB Atlas');
    await mongoose.connection.close();
  } catch (error) {
    console.error('Connection test failed:', error);
  }
}

module.exports = testConnection;  // Make sure this line is present