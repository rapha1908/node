const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://raphasanti:faqZhidJKJZf9WE4@cluster1.fqizkfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase;