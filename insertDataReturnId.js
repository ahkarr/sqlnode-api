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
  VALUES(?,?,?,?,?);
  `;

  let data = ['o9batch','o9batch','{"guid": "df5ed9c6-4670-11ef-86f2-08002724b1e1", "createdtimestamp": "2024-07-20 08:20:06.000000"}','2024-07-20 08:20:06','neptune'];

  // execute the insert statment
  connection.query(sql, data, (err, results, fields) => {
    if (err) return console.error(err.message);

    console.log('User Id:' + results.insertId);
  });

  // close the database connection
  connection.end();
});
