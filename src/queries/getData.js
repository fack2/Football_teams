const dbConnection = require('../db_connection');

const getData = (country, cb) => {
  if (country === 'Spain') {
    dbConnection.query(
      "select teams.logo , teams.description,teams.team_name, countries.country_name from countries inner join teams on teams.id_countries = countries.id_countries where countries.country_name='Spain'",
      (err, res) => {
        if (err) {
          return cb(err);
        }
        console.log('res', res);
        cb(null, res.rows);
      },
    );
  } else if (country === 'England') {
    dbConnection.query(
      "select teams.logo , teams.description,teams.team_name, countries.country_name from countries inner join teams on teams.id_countries = countries.id_countries where countries.country_name='England'",
      (err, res) => {
        if (err) {
          return cb(err);
        }
        console.log('res', res);
        cb(null, res.rows);
      },
    );
  }
};
module.exports = getData;
