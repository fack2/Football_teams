const test = require("tape");
const router = require("/home/saja-lahaleeh/Football_teams/src/router.js");
const supertest = require("supertest");
const runDbBuild = require("../database/db_build.js");
const getData = require("../queries/getData");
console.log(runDbBuild);
test("tape is working", t => {
  t.equals(1, 1, "one equals one");
  runDbBuild(function(error, result) {
    if (error) {
      console.log(error);
    } else return result;
  });
  t.end();
});
test("testing for home root status code 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.equal(res.statusCode, 200, "should return 200 ");
      t.end();
    });
});

test("get data method", t => {
  const actual = [
    {
      id: 2,
      team_name: "Barcelona",
      description:
        "is a Spanish professional football club based in Barcelona, Catalonia, Spain.Founded in 1899 by a group of Swiss, Spanish, English, and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto Més que un club (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.06 billion, and the worlds second-richest football club in terms of revenue, with an annual turnover of €690.4 million.The official Barcelona anthem is the Cant del Barça written by Jaume Picas and Josep Maria Espinàs."
    }
  ];
  runDbBuild(function(err, res) {
    // console.log("here2");
    const expect = getData((err, res) => {
      console.log("here3", res);
      t.deepEqual(actual, res, "expect should be equal actual");

      t.end();
    });
  });
});
