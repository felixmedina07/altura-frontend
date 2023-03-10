var path = require("path");

var express = require("express");

var app = express();
const publicPath = path.join(__dirname, "build");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html")),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    };
});

app.set("port", process.env.PORT || 8080);

var server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
