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

  // insert statment
  let sql = `
  INSERT INTO o9user.UserInfo (UserName,LoginName,UserLog,CreatedAt,CreatedBy)
  VALUES
  ('o9use','o9user',JSON_OBJECT('guid',uuid(),'createdtimestamp',NOW()),NOW(),'neptune')`;

  // execute the insert statment
  connection.query(sql);

  // close the database connection
  connection.end();
});