const express = require("express");
const router = express.Router();
const client = require('./database');

router.post("/", async (req, res) => {

  const { usuario, senha } = req.body;
  const query = "select * from usuarios where username = '" + usuario +
  "' and pass = '" + senha + "'";
  try {
    const response = await client.query(query, (err, dbRes) => {
      if (err) {
        console.log(err.stack)
      } else {
        const row = dbRes.rows[0];
        return res.status(200).json(row);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({Message:'Algo deu errado.'});
  }
});

module.exports = router;
