const { homePage, publicHandler, notFound, getTeamData } = require("./handler");

const router = (request, response) => {
  const pathname = request.url;
  if (pathname === "/") {
    homePage(request, response);
  } else if (
    ["jpg", "html", "ico", "js", "png", "css"].includes(pathname.split(".")[1])
  ) {
    return publicHandler(request, response, pathname);
  } else if (pathname.includes("/search")) {
    getTeamData(request, response);
  } else {
    return notFound(request, response);
  }
};

module.exports = router;
