const dotenv = require("dotenv");
const mysql = require('mysql2');
dotenv.config({ path: "./config.env" });
const connection = mysql.createConnection({
  host: 'localhost',
  user:  'root',
  password: 'toor123',
  database:  'dice',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


 connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});
module.exports = connection;






// host: 'localhost',
// user:  'injfbzag_jastrobot',
// password: 'Jastro!@#$%54321',
// database:  'injfbzag_jastrobot',
// waitForConnections: true,
// connectionLimit: 10,
// queueLimit: 0