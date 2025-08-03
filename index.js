const dotenv = require("dotenv");


dotenv.config();

const connectToDatabase = require("./src/database/connect");
connectToDatabase().then(() => 
  console.log('Banco de dados conectado com sucesso!')
).catch((err) => 
 console.error('Error in test connection:', err)
);

require("./modules/express");

const testConnection = require('./test-connection');
testConnection()
.then(() => console.log('Test connection successful!'))
.catch((err) => console.error('Error in test connection:', err));
