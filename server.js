var app = require('./setup').app();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_APIKEY);

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

app.post('/contact', function (req, res) {

  if (req.body && req.body.name && req.body.email && req.body.comments) {
    var txtMsg = "Contact us | Request a demo\n\n";
    if (req.body.company) {
      txtMsg += "Company: " + req.body.company + "\n";
    };
    txtMsg += "Email: " + req.body.email + "\n";
    txtMsg += "Comments: " + req.body.comments + "\n";

    var message = {
      text: txtMsg,
      subject: "Web Contact | Motio",
      from_email: "web-contact@getmotio.com",
      from_name: "Web contact",
      to: [{
        email: "hello@getmotio.com"
      }]
    };

    mandrill_client.messages.send({
      message: message
    });

    res.status(200).send();
  } else {
    res.status(400).send();
  };

});

