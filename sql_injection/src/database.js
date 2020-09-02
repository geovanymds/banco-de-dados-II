const { Client, Pool } = require("pg");
const uri = "postgres://postgres:99876653910g@localhost:5432/sql_injection";

const pool = new Pool({
  connectionString: uri,
});
const client = new Client({
  connectionString: uri,
});

client.connect();

module.exports = client;