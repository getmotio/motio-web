var app = require('./setup').app();

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
