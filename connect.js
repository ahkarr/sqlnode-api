let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connection to 192.168.190.20 uat-coreapp-db is started.');
});

connection.end((err) => {
	if(err) return console.error(err.message);

	console.log('Connection to 192.168.190.20 uat-coreapp-db is closed!')
});