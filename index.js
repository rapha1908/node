const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

const testConnection = require('./test-connection');
testConnection()
 .then(() => console.log('Test connection successful!'))
 .catch((err) => console.error('Error in test connection:', err));
