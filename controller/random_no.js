const db = require("./db.js");

async function update_random_nos(req, res, next) {
  const update = await db.run_query(
    `
  UPDATE trib_0.responses
  SET random_10 = ?, random_100 = ?
  WHERE id_1 = ? AND id_2 = ?;
   `,
    [
      req.params.rnd_no10,
      req.params.rnd_no100,
      req.params.id_1,
      req.params.id_2,
    ]
  );

  res.json({ status: "SUCCESS" });
}

async function get_random_nos(req, res, next) {
  const sql_result = await db.run_query(
    `SELECT random_10, random_100
    FROM trib_0.responses 
    WHERE id_1 = ? AND id_2 =  ?;`,
    [req.params.id_1, req.params.id_2]
  );

  console.log(sql_result);

  res.json({ status: "SUCCESS" });
}

exports.update_random_nos = update_random_nos;
exports.get_random_nos = get_random_nos;
