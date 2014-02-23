var express = require('express')
  , gzippo = require('gzippo');

exports.app = function () {
  var app = express();
  app.use(gzippo.staticGzip(__dirname + '/dist'));
  app.use(express.bodyParser());
  return app;
};
