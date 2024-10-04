const db = require("./db.js");

async function update_favorite_dob(req, res, next) {
  const now = new Date();
  const sql_result = await db.run_query(
    `UPDATE trib_0.responses
         SET favorite_no = ?, favorite_color = ?, year = ?,
         month = ?, day = ?, age = ?
         WHERE id_1 = ? AND id_2 = ?;`,
    [
      req.params.fav_no,
      req.params.fav_color,
      req.params.year,
      req.params.month,
      req.params.day,
      now.getFullYear() -
        req.params.year +
        (now.getMonth() + 1 < req.params.month ||
        (now.getMonth() + 1 == req.params.month &&
          now.getDate() < req.params.day)
          ? -1
          : 0),
      req.params.id_1,
      req.params.id_2,
    ]
  );
  console.log(now.getDate(), now.getMonth());
  res.json({ status: "SUCCESS" });
}

async function get_favorite_dob(req, res, next) {
  const sql_result = await db.run_query(
    `SELECT favorite_no, favorite_color, year, month, day, age 
    FROM trib_0.responses 
    WHERE id_1 = ? AND id_2 =  ?;`,
    [req.params.id_1, req.params.id_2]
  );

  console.log(sql_result);

  res.json({ status: "SUCCESS" });
}

exports.update_favorite_dob = update_favorite_dob;
exports.get_favorite_dob = get_favorite_dob;
