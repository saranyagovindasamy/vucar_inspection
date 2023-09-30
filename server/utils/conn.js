import mysql from 'mysql2'

const connection = mysql.connect({
  host: "localhost",
  user: "root",
  password: "848911",
  database: "vucar",

});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

connection.on("connection", function (connection) {
  console.log("DB Connection established");

  connection.on("error", function (err) {
    console.error(new Date(), "MySQL error", err.code);
  });
  connection.on("close", function (err) {
    console.error(new Date(), "MySQL close", err);
  });
});
});

export default connection;