const { Pool } = require("pg");

require("env2")("./config.env");
// connectionString
// this will allow us to connect to the database
const connectionString = process.env.DB_URL;

if (!connectionString) {
  throw new Error("please set a db_url env varaiable");
}

module.exports = new Pool({
  connectionString,

  ssl: !connectionString.includes("localhost")
});
