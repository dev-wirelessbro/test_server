const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  router = require('./router'),
  config = require('./config/main');

let server;
server = app.listen(config.port);
console.log(`Your server is running on port ${config.port}.`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router(app);

module.exports = server;
