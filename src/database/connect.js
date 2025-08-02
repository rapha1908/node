const dotEnv = require('dotenv');

const mongoose = require('mongoose');
dotEnv.config();

async function connectToDatabase() {
  console.log('connectToDatabase foi chamado');
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to MongoDB Atlas');
    return true; // Indica sucesso
  } catch (error) {
    console.error('Connection test failed:', error);
    console.log('connectToDatabase deu ruim');
    return false; // Indica falha
  }
}

module.exports = connectToDatabase;