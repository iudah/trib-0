const db = require("./db.js");

async function update_bias_random(req, res, next) {
  const update = await db.run_query(
    `UPDATE trib_0.responses
    SET bias_10 = ?, bias_100 = ?, finished = ?
    WHERE id_1 = ? AND id_2 = ?;`,
    [
      req.params.bias10,
      req.params.bias100,
      req.params.finished,
      req.params.id_1,
      req.params.id_2,
    ]
  );

  res.json({ status: "SUCCESS" });
}

async function get_bias_random(req, res, next) {
  const sql_result = await db.run_query(
    `SELECT bias_10, bias_100, finished 
    FROM trib_0.responses 
    WHERE id_1 = ? AND id_2 =  ?;`,
    [req.params.id_1, req.params.id_2]
  );

  console.log(sql_result);

  res.json({ status: "SUCCESS" });
}

exports.update_bias_random = update_bias_random;
exports.get_bias_random = get_bias_random;
