const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "",
  port: 5432,
  database: "shellsoftware"
});

module.exports = pool;
