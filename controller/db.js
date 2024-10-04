const maria = require("mariadb");
const pool = maria.createPool({
  host: "127.0.0.1",
  Host: "127.0.0.1",
  port: 3306,
  user: "user",
  password: "password",
  connectionLimit: 5,
});

async function maria_query(query, values) {
  let connection;
  let rows;
  try {
    connection = await pool.getConnection();
    rows = await connection.query(query, values);
  } catch (err) {
    console.log(err);
    rows = err;
  } finally {
    if (connection) connection.release();
  }
  return rows;
}

(async function () {
  let tables = await maria_query(`
  CREATE DATABASE IF NOT EXISTS trib_0;
`);
  tables = await maria_query(`drop table  if exists trib_0.responses`);
  tables = await maria_query(`
  CREATE TABLE IF NOT EXISTS trib_0.responses (
    id INT AUTO_INCREMENT NOT NULL,
    id_1 VARCHAR(32) NOT NULL,
    id_2 VARCHAR(32) NOT NULL,
    gender ENUM("male", "female"),
    country VARCHAR(50),
    favorite_no INT, 
    favorite_color ENUM("red", "orange", "yellow", "green", "blue", "purple", "white", "black", "grey"),
    year INT,
    month INT,
    day INT,
    age INT,
    random_10 INT,
    random_100 INT,
    bias_10 INT,
    bias_100 INT,
    finished ENUM("true", "false") DEFAULT "false",

    PRIMARY KEY(id), UNIQUE(id_1,id_2)
  );
  `);

  // console.log(tables);
})();

exports.run_query = maria_query;
