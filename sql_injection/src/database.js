const { Client, Pool } = require("pg");
require('dotenv').config();

const user = process.env.PG_USER;
const host = process.env.PG_HOST;
const password = process.env.PG_PASS;
const port = process.env.PG_PORT;
const database = process.env.PG_DB;

const uri = `postgres://${user}:${password}@${host}:${port}/${database}`;

const pool = new Pool({
  connectionString: uri,
});
const client = new Client({
  connectionString: uri,
});

client.connect();

module.exports = client;