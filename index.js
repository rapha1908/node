const dotEnv = require('dotenv');

dotEnv.config();

const connectToDatabase = require('./src/database/connect');
// Test the database connection
connectToDatabase()
  .then((success) => {
    if (success) {
      console.log('Database connection successful!');
    } else {
      console.log('Database connection failed.');
    }
  })
  .catch((err) => console.error('Error in connectToDatabase:', err));
// Mantendo o testConnection comentado, já que está funcionando corretamente
// const testConnection = require('./test-connection');
// testConnection()
 //.then(() => console.log('Test connection successful!'))
 //.catch((err) => console.error('Error in test connection:', err));
