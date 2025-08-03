require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://raphasanti:oxL8MinbUg79GFB1@nodecourse.0e6f2o9.mongodb.net/meuDB?retryWrites=true&w=majority&appName=NodeCourse"
);
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = testConnection;  // Make sure this line is present