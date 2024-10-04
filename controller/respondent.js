const db = require("./db.js");

async function add_respondent_data(req, res, next) {
  const sql_result = await db.run_query(
    `INSERT INTO trib_0.responses(id_1, id_2,country,gender) VALUES (?,?,?,?);`,
    [req.params.id_1, req.params.id_2, req.params.country, req.params.gender]
  );

  console.log(sql_result);

  res.json({ status: "SUCCESS" });
}

async function get_respondent_data(req, res, next) {
  const sql_result = await db.run_query(
    `SELECT country, gender FROM trib_0.responses WHERE id_1 = ? AND id_2 =  ?;`,
    [req.params.id_1, req.params.id_2]
  );

  console.log(sql_result);

  res.json({ status: "SUCCESS" });
}

exports.add_respondent_data = add_respondent_data;
exports.get_respondent_data = get_respondent_data;
