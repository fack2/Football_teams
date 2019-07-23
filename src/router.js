const { homePage, publicHandler, notFound } = require("./handler");
const router = (request, response) => {
  const pathname = request.url;

  if (pathname == "/") {
    return homePage(request, response);
  } else if (
    ["jpg", "html", "ico", "js", "png", "css"].includes(pathname.split(".")[1])
  ) {
    return publicHandler(request, response, pathname);
  } else {
    return notFound(request, response);
  }
};

module.exports = router;
