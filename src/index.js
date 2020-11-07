var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.write("Welcome to Dominos!");
    res.end();
  }
  if (req.url === "/welcome") {
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
  } else {
    res.status(404);
  }
}
httpServer.listen(8081);
module.exports = httpServer;
