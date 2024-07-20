let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// connect to the MySQL server
connection.connect((err) => {
  if (err) return console.error(err.message);

  const createTodosTable = `CREATE TABLE IF NOT EXISTS UserInfo(
    UserId INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(50),
    LoginName VARCHAR(50),
    UserLog JSON,
    CreatedAt DATETIME,
    CreatedBy VARCHAR(15)
                      )`;

  connection.query(createTodosTable, (err, results, fields) => {
    if (err) return console.log(err.message);
  });

  // close the connection
  connection.end((err) => {
    if (err) return console.log(err.message);
  });
});
