const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);
const port = process.env.PORT || 4002;

server.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
