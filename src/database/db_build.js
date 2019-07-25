const fs = require("fs");

const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = cb => dbConnection.query(sql, cb);

if (process.env.NODE_ENV === "test") {
  module.exports = runDbBuild;
} else {
  runDbBuild((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
}
