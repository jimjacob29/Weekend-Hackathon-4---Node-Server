var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "./welcome") {
    // res.statusCode = 200;
    res.write("Welcome to Dominos!");

    res.end();
  }
  if (req.url === "./contact") {
    // res.statusCode = 200;
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );

    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
}
httpServer.listen(8081);
module.exports = httpServer;
