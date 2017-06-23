const express = require('express');

module.exports = function (app) {
  const apiRoutes = express.Router();

  app.use('/api', apiRoutes);
};
