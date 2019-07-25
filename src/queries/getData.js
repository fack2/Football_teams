const dbConnection = require("../database/db_connection");

const getData = (country, cb) => {
  if (country) {
    dbConnection.query(
      "select teams.logo , teams.description,teams.team_name, countries.country_name from countries inner join teams on teams.id_countries = countries.id_countries where countries.country_name=$1",
      [country],
      (err, res) => {
        if (err) {
          return cb(err);
        }
        console.log("res", res);
        cb(null, res.rows);
      }
    );
  }
};
module.exports = getData;
