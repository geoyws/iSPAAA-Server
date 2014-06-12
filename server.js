var express = require("express");
var logfmt = require("logfmt");
var pg = require("pg");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

var connectionString = "postgres://lcqhvaeetzqhuj:aEU4uaCjrPqSjn3WTaB9gBurkM@ec2-54-225-101-60.compute-1.amazonaws.com:5432/d24kerf47a43mb";

pg.connect(connectionString, function (err, client, done) {
    client.query('SELECT * FROM your_table', function (err, result) {
        done();
        if (err) return console.error(err);
        console.log(result.rows);
    });
});

